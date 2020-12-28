function spawnGoomba()
{
    if(World.frameCount % 100 === 0)
    {
        var goomba = createSprite(player.x + 900,360,40,40);
        goomba.y = 360;
        enemyGroup.add(goomba);
        goomba.addAnimation("walking",goombaanim);
        goomba.scale = 1.2;
    }
}