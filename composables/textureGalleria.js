// Insert names of the textures from /img/textures
const imageName = [
    'golden_apple',
    'amethyst_shard',
    'bread',
    'cooked_porkchop',
    'apple',
    'ender_eye',
    'gold_ingot',
    'iron_ingot',
    'iron_sword',
    'netherite_sword',
    'emerald_block',
    'stone_bricks',
    'redstone_lamp_on',
]

let textureImages = []

imageName.forEach(element => {
    textureImages.push({
        itemImageSrc: `/img/textures/${element}.png`,
        thumbnailImageSrc: `/img/textures/${element}.png`,
    })
});

export default textureImages