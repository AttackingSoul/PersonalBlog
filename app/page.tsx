import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a software developer with a wide range of interests, so I have this blog to help me remember.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
