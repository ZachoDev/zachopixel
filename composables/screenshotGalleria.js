// Insert names of the screenshots from /img/screenshots
const imageName = [
    'water',
    'aircraft',
    'zeppelin',
    'village',
    'ottoman',
    'guns',
    'juan',
]

let textureImages = []

imageName.forEach(element => {
    textureImages.push({
        itemImageSrc: `/img/screenshots/${element}.png`,
        thumbnailImageSrc: `/img/screenshots/${element}.png`,
    })
});

export default textureImages