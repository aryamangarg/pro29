class box extends BaseClass{
constructor(x,y,width,height){
    super(x,y,width,height)
}
push()
if (box.velocityX<3){
box.visible(true)
};
else{
    box.visible(false)
}
box.tint(255,255,255,0)
pop()

}