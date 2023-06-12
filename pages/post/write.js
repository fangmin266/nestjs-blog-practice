import React, { useRef, useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function write() {
  const idRef = useRef(undefined)
  const titleRef = useRef(undefined)
  const contentRef = useRef(undefined)
  const [showLink, setShowLink] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Fetch Error')
        })
        .then((data) => {
          setShowLink(true)
          alert(data.message)
        })
        .catch((error) => alert(`request errorL ${error}`))
    }
  }
  return (
    <Layout>
      <h1>write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          ref={contentRef}
        />
        <br />
        <input type="submit" value="create" />
      </form>
      {showLink && (
        <Link legacyBehavior href={`/posts/${idRef.current.value}`}>
          <a>create post</a>
        </Link>
      )}
    </Layout>
  )
}
