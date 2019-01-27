alias ProServer.Repo
alias ProServer.ProServer.Post

Repo.insert! %Post{
    title: "East Tennessee",
    body: "Hiking in the Smokey Mountains"
}

Repo.insert! %Post{
    title: "Big Frog",
    body: "Hiking in the Big Frog Wilderness area"
}

Repo.insert! %Post{
    title: "Savage Gulf",
    body: "Hiking in the South Cumberland State Park"
}