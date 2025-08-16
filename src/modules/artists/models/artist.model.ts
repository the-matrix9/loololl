import { z } from 'zod'

export const SimpleSongModel = z.object({
  id: z.string(),       // music ID
  title: z.string()     // song name
})
