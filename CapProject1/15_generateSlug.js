function generateSlug(title) {
let slug = String(title).toLowerCase().replaceAll(' ','-') + ".com"
return slug;
}

console.log(generateSlug("Almabetter Web Dev"));