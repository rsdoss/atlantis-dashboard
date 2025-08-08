import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const { reading } = await req.json()
  // NOTE: This is a stub to prove out the interaction.
  // Wire this to your LLM of choice (e.g., OpenAI responses) on your own.
  // Keep PHI out of requests; this is pool water, not patient data.
  const lines: string[] = []
  if (reading?.pH !== undefined) {
    if (reading.pH < 7.2) lines.push('pH low: consider soda ash (sodium carbonate).')
    if (reading.pH > 7.8) lines.push('pH high: consider muriatic acid; dose carefully.')
  }
  if (reading?.FC !== undefined && reading?.CYA !== undefined) {
    lines.push(`With CYA ~${reading.CYA} ppm, target FC roughly ${Math.round(reading.CYA/10)}–${Math.round(reading.CYA/7)} ppm (Trouble Free Pool method).`)
  }
  if (lines.length === 0) lines.push('Add specific readings for targeted advice.')
  return new Response(JSON.stringify({ advice: lines.join('\n') }), {
    headers: { 'content-type': 'application/json' }
  })
}
