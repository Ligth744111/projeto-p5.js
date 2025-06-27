let img1, img2,img3;


function preload(){
  img1 = loadImage('img1.jpg')
  img2 = loadImage('img2.jpg')
  img3=  loadImage('img3.jpg')
  
}
function setup() {
  createCanvas(500, 550);
}

function draw() {
  background(220);
  image(img1,0,80,150,150)
  fill(0,100,0)
  
  rect(0,0,500,80)//barra cima
  
  image(img2, 5,5,70,70)
  
image(img3,1,300,150,150)

rect(0,500,550)
  
fill(0); // Cor do texto (preto
  textSize(24); // Tamanho da fonte do título // Alinha o texto ao centro, tanto horizontal quanto verticalmente
  text('Conexão\nCampo Cidade.',80,30);  
  text('Com o passar do tempo\nas áreas urbanas e rurais\n foram sofrendo \ntransformações devido às \nnecessidades das pessoas.\n Tanto a cidade quanto o campo \napresentam características\n próprias que diferenciam \num espaço do outro. Assim \nsendo, podemos dizer que\n a cidade é dependente do campo, assim como o\n campo\n é dependente da cidade',150,130);
}