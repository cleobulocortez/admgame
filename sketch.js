/*Link para a descrição no colabeduc: http://www.colabeduc.org/descricao/show/530
Link para o 1° vídeo no YouTube: https://youtu.be/O9BbKq8knas
Link para o 2° vídeo no YouTube: https://youtu.be/hJCuKXfQx9Y
Link para o Projeto no ColabEduc: http://www.colabeduc.org/projeto/show/575
*/

//variáveis com valor
var tela=0;
var t=0;
var menucont=1;
var menuy=220;
var faseY=391;
var faseX=95;
var resposta=1;
var errado=false;
var sortfase=[1, 4, 5, 6];
var score=0;

//variáveis de imagens
var imgmenu;
var imgrenata;
var imgeu;
var imgpapel;
var imgfase1;
var imgfase2;
var imgfase3;
var imgfase4;
var imgcaderno;
var imgganhou;
var imgerrou;

//variáveis de som
var backsound;
var sfxerrou;
var sfxwin;
var sfxacerto;
var sfxmenu;

//Função preload, para um pré carregamento dos arquivos utilizados
function preload(){
  soundFormats('mp3')
  imgmenu=loadImage("menu.png")
  imgrenata=loadImage("renata.png")
  imgeu=loadImage("eu.png")
  imgpapel=loadImage("papelmenu.jpeg")
  imgcaderno=loadImage("folhinha.jpg")
  imgfase1=loadImage("fase1bg.jpeg")
  imgfase2=loadImage("fase2bg.png")
  imgfase3=loadImage("fase3bg.png")
  imgfase4=loadImage("fase4bg.png")
  imgganhou=loadImage("ganho.png")
  imgerrou=loadImage("erroubg.png")
  sfxerrou=loadSound("sfxerrou.mp3")
  sfxwin=loadSound("sfxwin.mp3")
  sfxacerto=loadSound("sfxacerto.mp3")
  sfxmenu=loadSound("sfxmenu.mp3")
  backsound=loadSound("sndbacksound.mp3")
}

//Função que define as configurações do nosso jogo
function setup() {
  createCanvas(500, 500);
  textFont('Comic Sans MS')
  backsound.loop()
  backsound.setVolume(0.5)
}

//função de sorteio das fases utilizando vetores
function sorteio(){
  tela=random(sortfase)
  sortfase.splice(sortfase.indexOf(tela),1)
  if(tela==1){
    t=tela
    resposta=1
    faseY=391
    faseX=95
  }
  if(tela==4){
    t=tela
    resposta=1
    faseY=391
    faseX=95
  }
  if(tela==5){
    t=tela
    resposta=1
    faseY=391
    faseX=95
  }
  if(tela==6){
    t=tela
    resposta=1
    faseY=391
    faseX=95
  }
}

//Função que desenha nossas telas
function draw() {
  background(220);
  if(tela==0){
    menu()
  }
  if(tela==1){
    fase1()
  }
  if(tela==2){
    instrucoes()
  }
  if(tela==3){
    creditos()
  }
  if(tela==4){
    fase2()
  }
  if(tela==5){
    fase3()
  }
  if(tela==6){
    fase4()
  }
  if(tela==7){
    errou()
  }
  if(tela==8){
    ganhou()
  }
}

//Função respectiva à tela 0, Menu
function menu(){
  background(0, 0, 0);
  image(imgpapel, 0, 0)
  image(imgmenu, 0, 0)
  
  noFill()
  rect(165, menuy, 170, 50, 20)
  
  fill(0, 0, 0)
  textSize(50)
  text("EducaGame", 110, 180)
  textSize(30)
  text("Jogar", 210, 255)
  text("Instruções", 175, 305)
  text("Créditos", 190, 355)
}

//Função respectiva à tela 1, fase 1
function fase1(){
  background(220);
  image(imgfase1, 0, 0)
  image(imgcaderno, 25, 360)
  
  noFill()
  rect(faseX, faseY, 145, 35, 10)
  textSize(16)
  fill(255, 255, 255)
  text("A professora está explicando", 139, 170)
  text("a atividade.", 139, 190)
  text("O que eu devo fazer?", 138, 210)
  
  textSize(14.5)
  fill(0, 0, 0)
  text("A) Prestar atenção", 100, 414)
  text("B) Conversar", 275, 414)
  text("C) Fazer barulhos", 100, 460)
  text("D) Brincar", 275, 460)
}

//Função respectiva à tela 4, fase 2
function fase2(){
  background(234, 103, 150);
  image(imgfase2, 0, -30)
  image(imgcaderno, 25, 360)
  
  noFill()
  rect(faseX, faseY, 175, 35, 10)
  textSize(16)
  fill(0, 0, 0)
  text("Oba! O sinal tocou e é", 155, 105)
  text("hora do lanche.", 155, 125)
  text("O que eu devo fazer?", 155, 145)
  
  textSize(14.5)
  fill(0, 0, 0)
  text("A) Jogar comida fora", 100, 414)
  text("B) Brincar com a comida", 275, 414)
  text("C) Lavar as mãos", 100, 460)
  text("D) Ir para casa", 275, 460) 
}

//Função respectiva à tela 5, fase 3
function fase3(){
  background(29, 155, 85);
  image(imgfase3, 0, -45)
  image(imgcaderno, 25, 360)
  
  noFill()
  rect(faseX, faseY, 145, 35, 10)
  textSize(18)
  fill(0, 0, 0)
  text("Estava correndo e esbarrei ", 145, 115)
  text("no coleguinha.", 145, 135)
  text("O que eu devo fazer?", 145, 155)
  
  textSize(14.5)
  fill(0, 0, 0)
  text("A) Bater no colega", 100, 414)
  text("B) Voltar a correr", 275, 414)
  text("C) Estirar a língua", 100, 460)
  text("D) Pedir desculpas", 275, 460)
  //text("pontos: "+score, 330, 100)
  
}

//Função respectiva à tela 6, fase 4
function fase4(){
  background(64, 161, 219);
  image(imgfase4, 0, -40)
  image(imgcaderno, 25, 360)
  
  noFill()
  rect(faseX, faseY, 160, 35, 10)
  textSize(15.4)
  fill(0, 0, 0)
  text("Na escola, o que devemos sentir ", 130, 115)
  text("pelos professores e funcionári-\nos?", 130, 135)
  
  textSize(14.5)
  fill(0, 0, 0)
  text("A) Raiva e estresse", 100, 414)
  text("B) Respeito e carinho", 275, 414)
  text("C) Tristeza e desânimo", 100, 460)
  text("D) Medo e confusão", 275, 460)
}

//Função respectiva à tela 7, tela de erro
function errou(){
  background(220);
  image(imgerrou, 0, 0)
  fill(255)
  textSize(25)
  text("Ei! Não é assim que se deve agir!", 65, 120)
  textSize(20)
  text("Pressione Enter para tentar novamente", 69, 150)
}

//Função respectiva à tela 8, tela de vitória
function ganhou(){
  background(220);
  image(imgganhou, 0, 0)
  textSize(70)
  text("Parabéns!", 100, 150)
  fill(0)
  textSize(15)
  text("Se você está vendo isso significa que você é um ótimo aluno!", 40, 190)
  text("Pressione Esc para voltar ao menu", 10, 30)  
}

//Função respectiva à tela 2, tela de instruções
function instrucoes(){
  background(220);
  image(imgpapel, 0, 0)
  image(imgmenu, 0, 0)
  textSize(40)
  text("Instruções", 155, 150)
  textSize(15)
  text("Ano: 1° do Fundamental", 30, 195)
  text("Geografia: (EF01GE04) Discutir e elaborar, coletivamente, regras\nde convívio em diferentes espaços (sala de aula, escola etc.)", 30, 225)
  text("Olá! Este é o EducaGame, aqui nós iremos te apresentar algumas\nsituações, então você deverá utilizar as setas e o botão Enter do\nseu teclado para escolher como reagir. Tenha um ótimo jogo!", 30, 275)
  textSize(18)
  text("Pressione Esc para voltar ao menu", 10, 490)
}

//Função respectiva à tela 3, tela de créditos
function creditos(){
  background(220);
  image(imgpapel, 0, 0)
  image(imgmenu, 0, 0)
  image(imgrenata, 40, 165)
  image(imgeu, 360, 165)
  textSize(40)
  text("Créditos", 175, 150)
  textSize(18)
  text("Renata de Souza Gomes", 40, 290)
  text("Educadora Infantil", 40, 310)
  text("Estudante de Pedagogia", 40, 330)
  text("pela UNP", 40, 350)
  text("Lucas Dias de Melo", 310, 290)
  text("Programador", 363, 310)
  text("Estudante do Bacharelado", 251, 330)
  text("em Ciências e Tecnologia", 263, 350)
  text("pela UFRN", 380, 370)
  text("Pressione Esc para voltar ao menu", 10, 490)
}

//Funções vinculadas ao teclado
function keyPressed(){
  if(keyCode==UP_ARROW && menuy>250 && tela==0){
    menuy=menuy-50
    menucont--
    sfxmenu.play()
  }
  if(keyCode==DOWN_ARROW && menuy<300 && tela==0){
    menuy=menuy+50
    menucont++
    sfxmenu.play()
  }
  if(keyCode==ENTER){
    if(errado==true){
      errado=false
      tela=t
      resposta=1
      sfxerrou.stop()
      backsound.loop()
      
    }
    else{
      
      if(tela==6){
        if(resposta==2){
          score=score+10
          if(score>=40){
            tela=8
            t=tela
            sfxwin.play()
          }
          else{
            sorteio()
            sfxacerto.play()
          }
        }
        else{
          errado=true
          tela=7
          resposta=4
          faseY=391
          faseX=95
          sfxerrou.play()
          backsound.pause()
        }
      }
      else
        
        if(tela==5){
          if(resposta==4){
            score=score+10
            if(score>=40){
              tela=8
              t=tela
              sfxwin.play()
            }
            else{
              sorteio()
              sfxacerto.play()
            }
          }
          else{
            errado=true
            tela=7
            resposta=3
            faseY=391
            faseX=95
            sfxerrou.play()
            backsound.pause()
          }
        }
        else
          
          if(tela==4){
            if(resposta==3){
              score=score+10
              if(score>=40){
                tela=8
                t=tela
                sfxwin.play()
              }
              else{
                sorteio()
                sfxacerto.play()
              }
            }
            else{
              errado=true
              tela=7
              resposta=1
              faseY=391
              faseX=95
              sfxerrou.play()
              backsound.pause()
            }
          }
          else
            
            if(tela==1){
              if(resposta==1){
              score= score+10
                if(score>=40){
                  tela=8
                  t=tela
                  sfxwin.play()
                }
                else{
                  sorteio()
                  sfxacerto.play()
                }  
              }
              else{
                errado=true
                tela=7
                resposta=1
                faseY=391
                faseX=95
                backsound.pause()
                sfxerrou.play()
              }
            }
    }
    
    if(tela==0){
      if(menucont==1){
       sorteio()
       sfxmenu.play()
       }
    if(menucont==2){
       tela=2
       sfxmenu.play()
       }
    if(menucont==3){
       tela=3
       sfxmenu.play()
       }
    }
  }
  if(keyCode==ESCAPE && (tela==7 || tela==8)){
    backsound.stop()
    backsound.loop()
    menuy=220
    menucont=1
    t=0
    tela=0
    errado=false
    resposta=1
    faseY=391
    faseX=95
    sfxwin.stop()
    sfxerrou.stop()
    sfxmenu.play()
    score=0
    sortfase=[1, 4, 5, 6]
  }
  else
    if(keyCode==ESCAPE){
      menuy=220
      menucont=1
      t=0
      tela=0
      errado=false
      resposta=1
      faseY=391
      faseX=95
      sfxwin.stop()
      sfxerrou.stop()
      sfxmenu.play()
      score=0
      sortfase=[1, 4, 5, 6]
    }
  
  if(keyCode==UP_ARROW && faseY>400 && (tela==1 || tela==4 || tela==5 || tela==6)){
    faseY=faseY-45
    resposta=resposta-2
    sfxmenu.play()
  }
  if(keyCode==DOWN_ARROW && faseY>300 && faseY<400 && (tela==1 || tela==4 || tela==5 || tela==6)){
    faseY=faseY+45
    resposta=resposta+2
    sfxmenu.play()
  }
  if(keyCode==LEFT_ARROW && faseX>110 && (tela==1 || tela==4 || tela==5 || tela==6)){
    faseX=faseX-170
    resposta=resposta-1
    sfxmenu.play()
  }
  if(keyCode==RIGHT_ARROW && faseX<200 && (tela==1 || tela==4 || tela==5 || tela==6)){
    faseX=faseX+170
    resposta=resposta+1
    sfxmenu.play()
  }
}