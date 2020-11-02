const populate = async posts => {
  const isDbPopulated = await posts.find().count();

  if (isDbPopulated) return; // dacă avem deja postări, ne oprim aici.

  const result = await posts.insertMany([
    {
      title: '🚀 My first blog post!!!',
      content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus, erat quis porta euismod, quam justo blandit lectus, eu vulputate tortor felis sit amet magna. Phasellus porta orci vel mollis posuere. Donec vitae ullamcorper est, at interdum nisi. Etiam massa quam, pellentesque vel blandit non, laoreet sed urna. Donec fermentum nulla libero, ac viverra erat interdum vitae. Vivamus vulputate nec ex a fringilla. Suspendisse potenti. Sed finibus, nibh nec blandit rutrum, purus massa ornare dui, a scelerisque mauris sapien quis tortor.

        <p>Donec sodales purus ac odio imperdiet, eu sagittis erat scelerisque. Suspendisse sit amet sapien laoreet, rhoncus lorem id, luctus massa. Proin vitae tempor mi. Nunc est est, volutpat id tellus et, euismod suscipit tellus. Proin eleifend sollicitudin est vitae gravida. Curabitur faucibus, sem vitae feugiat aliquet, velit lacus interdum augue, eleifend bibendum metus mauris ut dolor. Suspendisse fringilla maximus venenatis. Aliquam at tortor facilisis, sagittis nibh non, tristique orci. Nullam pretium lectus eget odio venenatis pretium. Fusce tempor ut quam a facilisis. Phasellus ut faucibus nibh. Sed vitae mattis enim.

        <p>Maecenas quis viverra ipsum. Duis venenatis augue sit amet lorem dapibus, et efficitur est tincidunt. Morbi pretium vehicula tempus. Donec bibendum neque eu purus malesuada, sed tempus dui dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non metus eu ex consectetur fermentum nec tincidunt justo. Nam gravida dolor enim, eget tincidunt enim blandit eu. Ut dignissim hendrerit dui, pellentesque volutpat diam iaculis nec. Nunc in dictum lacus, a varius purus. Proin rhoncus tellus vel purus malesuada feugiat a nec ante. Vestibulum vitae suscipit lectus, vitae molestie augue. Cras viverra euismod enim, ac eleifend velit tempor id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        `,
      slug: 'post-1',
    },
    {
      title: '✏️ My first blog post!!!',
      content: 'Well, it works. Welcome to my blog.',
      slug: 'my-first-blog-post',
    },
    {
      title: '❓ My first blog post!!!',
      content: 'Well, it works. Welcome to my blog.',
      slug: 'post-3',
    },
  ]);
  console.log(`DB prepopulated with ${result.insertedCount} posts`);
};

module.exports = populate;
