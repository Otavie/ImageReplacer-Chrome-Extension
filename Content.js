let randomImages = [
    "https://www.gettyimages.com/detail/news-photo/actor-will-smith-attends-the-warner-bros-pictures-focus-news-photo/464337244",
    "https://www.gettyimages.com/detail/news-photo/actor-will-smith-arrives-at-the-los-angeles-world-premiere-news-photo/465783654",
    "https://www.gettyimages.com/detail/news-photo/actor-will-smith-attends-the-centerpiece-gala-premiere-of-news-photo/496584746",
    "https://www.gettyimages.com/detail/news-photo/will-smith-attends-apple-original-films-emancipation-los-news-photo/1445892465",
    "https://www.gettyimages.com/detail/news-photo/will-smith-attends-the-aladdin-european-gala-at-odeon-luxe-news-photo/1148082508",
    "https://www.gettyimages.com/detail/news-photo/actor-will-smith-holds-his-award-for-best-actor-in-a-news-photo/1239563389",
    "https://unsplash.com/photos/a-painting-of-a-mans-face-on-a-canvas-3Hsqx6BaQjQ",
    "https://www.gettyimages.com/detail/news-photo/will-smith-attends-theppremiere-of-20th-century-foxs-spies-news-photo/1192012412",
    "https://www.gettyimages.com/detail/news-photo/cristiano-ronaldo-smiles-as-he-is-unveiled-as-an-al-nassr-news-photo/1454029167",
    "https://www.gettyimages.com/detail/news-photo/al-nassrs-forward-cristiano-ronaldo-takes-part-in-a-team-news-photo/1245965643",
    "https://pixabay.com/photos/cristiano-ronaldo-soccer-player-8373364",
    "https://pixabay.com/illustrations/cristiano-ronaldo-ronaldo-football-8002334",
    "https://pixabay.com/photos/ronaldo-football-serbia-portugal-6130591",
    "https://cdn.pixabay.com/photo/2023/04/05/20/07/player-7902240_640.jpg"
];

const images = document.getElementsByTagName("img")

for (let i = 0; i < images.length; i++) {
    const randomIndex = Math.floor(Math.random() * randomImages.length)
    images[i].src = randomImages[randomIndex]
}