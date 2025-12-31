import { NextResponse } from 'next/server'

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  })

  return response.json()
}

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (response.status === 204 || response.status > 400) {
    return null
  }

  return response.json()
}

export async function GET() {
  try {
    const response = await getNowPlaying()

    if (!response || !response.item) {
      return NextResponse.json({ isPlaying: false })
    }

    const isPlaying = response.is_playing
    const title = response.item.name
    const artist = response.item.artists.map((artist: any) => artist.name).join(', ')
    const album = response.item.album.name
    const albumImageUrl = response.item.album.images[0]?.url
    const songUrl = response.item.external_urls.spotify

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    })
  } catch (error) {
    console.error('Error fetching now playing:', error)
    return NextResponse.json(
      { error: 'Failed to fetch currently playing track' },
      { status: 500 }
    )
  }
}

