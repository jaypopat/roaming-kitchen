export default function About() {
    return (


            <div
                className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10 xl:gap-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        We've been serving up delicious tacos to the community for over a decade. Our passion for
                        authentic
                        Mexican street food drives us to deliver the best flavors in every bite.
                    </p>
                </div>
                <img
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="300"
                    src="/placeholder.svg"
                    width="600"
                />
            </div>
    )
}