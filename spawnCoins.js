function spawnCoins()
{
    if(World.frameCount % 60 === 0)
    {
        var coin = createSprite(player.x + 900,random(200,300),20,20);
        coin.shapeColor = "yellow";
        coinGroup.add(coin);
    }
}