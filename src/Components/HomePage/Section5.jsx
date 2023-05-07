const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    description:
      " Ce site est une véritable aubaine pour les parents qui cherchent une crèche pour leur enfant. Il est très facile à utiliser et propose une grande variété d'options de recherche pour trouver la crèche idéale",
    date: "Mar 16, 2023",
    datetime: "2020-03-16",
    author: {
      name: "Michael Pitchar",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",

    description:
      " La plateforme est facile à naviguer et m'a permis de trouver rapidement une liste de crèches qui correspondaient à mes critères de recherche.",
    date: "Avr 18, 2023",
    datetime: "2020-03-16",

    author: {
      name: "Rayane Remadna",

      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",

    description:
      "Je tiens à exprimer ma grande satisfaction quant à la procédure de réservation des crèches que j'ai trouvée sur ce site. Celle-ci est très simple et intuitive.",
    date: "Mai 11, 2023",
    datetime: "2020-03-16",

    author: {
      name: "Riad Brahimi",

      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Section5() {
  return (
    <div className="bg-[#ffd2cf] py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold font-[Inter] tracking-tight text-blue-950 sm:text-4xl">
            Vos retour sur notre site
          </h2>
          <p className="mt-2 text-lg leading-8 text-blue-950">
            Commentaires et avis
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-rose-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-blue-950">{post.author.role}</p>
                </div>
              </div>

              <div className="group relative">
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-blue-950">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
