"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio element
  useEffect(() => {
    // Only initialize audio in the browser
    if (typeof window === "undefined") return

    const audio = new Audio()

    // Set audio properties
    audio.loop = true
    audio.volume = 0.3
    audio.preload = "metadata"

    // Add error handling
    audio.addEventListener("error", (e) => {
      console.warn("Hammer audio failed to load:", e)
      setAudioLoaded(false)
      setAudioError(true)
    })

    audio.addEventListener("canplaythrough", () => {
      setAudioLoaded(true)
      setAudioError(false)
    })

    audio.addEventListener("loadeddata", () => {
      setAudioLoaded(true)
      setAudioError(false)
    })

    // Set source after event listeners are attached
    audio.src = "/audio/Hammer.mp3"

    audioRef.current = audio

    return () => {
      if (audio) {
        audio.pause()
        audio.removeEventListener("error", () => {})
        audio.removeEventListener("canplaythrough", () => {})
        audio.removeEventListener("loadeddata", () => {})
        audio.src = ""
      }
    }
  }, [])

  // Handle play/pause
  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        // Check if audio is ready
        if (audioRef.current.readyState < 2) {
          // Try to load the audio
          audioRef.current.load()
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error("Audio load timeout")), 5000)
            audioRef.current!.addEventListener(
              "canplaythrough",
              () => {
                clearTimeout(timeout)
                resolve(true)
              },
              { once: true },
            )
            audioRef.current!.addEventListener(
              "error",
              () => {
                clearTimeout(timeout)
                reject(new Error("Audio load failed"))
              },
              { once: true },
            )
          })
        }

        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Audio play failed:", error)
      setIsPlaying(false)
      setAudioError(true)
      // Show user-friendly message
      alert("Audio playback failed. This may be due to browser restrictions or the audio file not being available.")
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    if (!audioRef.current) return

    const newMutedState = !isMuted
    audioRef.current.muted = newMutedState
    setIsMuted(newMutedState)
  }

  // Don't render if there's an error and audio never loaded
  if (audioError && !audioLoaded) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <Button
        onClick={togglePlay}
        size="sm"
        className="bg-black/80 hover:bg-black text-white border border-white/20 backdrop-blur-sm shadow-lg"
        aria-label={isPlaying ? "Pause Hammer's message" : "Play Hammer's message"}
        disabled={audioError}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>

      <Button
        onClick={toggleMute}
        size="sm"
        className="bg-black/80 hover:bg-black text-white border border-white/20 backdrop-blur-sm shadow-lg"
        aria-label={isMuted ? "Unmute Hammer's message" : "Mute Hammer's message"}
        disabled={audioError || !isPlaying}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  )
}
