let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

/*function boavinda(){
    var nome = prompt('Digite o seu nome (OPCIONAL):');
    alert('Seja Bem-vindo(a)' + ' ' + nome + '.');
}*/

function comprarfrango(){
    var qua = prompt('Digite Quantas Pizza:');
    var end = prompt('Digite o endereço:');
    var troc = prompt('Precisa de troco/cartao');
    alert('Quantidade = '+qua+' pizza(s)'+'  |  '+'Total = '+qua*50+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end);
    wppulr = 'https://wa.me//5512997641470?text='+qua+' pizza(s) de frango'+'  |  '+'Total = '+qua*50+' reais'+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end;
    window.open(wppulr);
}

function comprarcalabresa(){
    var qua = prompt('Digite Quantas Pizza:');
    var end = prompt('Digite o endereço:');
    var troc = prompt('Precisa de troco/cartao');
    alert('Quantidade = '+qua+' pizza(s)'+'  |  '+'Total = '+qua*50+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end);
    wppulr = 'https://wa.me//5512997641470?text='+qua+' pizza(s) de calabresa'+'  |  '+'Total = '+qua*50+' reais'+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end;
    window.open(wppulr);
}

function comprarportuguesa(){
    var qua = prompt('Digite Quantas Pizza:');
    var end = prompt('Digite o endereço:');
    var troc = prompt('Precisa de troco/cartao');
    alert('Quantidade = '+qua+' pizza(s)'+'  |  '+'Total = '+qua*50+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end);
    wppulr = 'https://wa.me//5512997641470?text='+qua+' pizza(s) de portuguesa'+'  |  '+'Total = '+qua*50+' reais'+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end;
    window.open(wppulr);
}

function comprarstrogonoff(){
    var qua = prompt('Digite Quantas Pizza:');
    var end = prompt('Digite o endereço:');
    var troc = prompt('Precisa de troco/cartao');
    alert('Quantidade = '+qua+' pizza(s)'+'  |  '+'Total = '+qua*50+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end);
    wppulr = 'https://wa.me//5512997641470?text='+qua+' pizza(s) de strogonoff'+'  |  '+'Total = '+qua*50+' reais'+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end;
    window.open(wppulr);
}

function comprarchocolate(){
    var qua = prompt('Digite Quantas Pizza:');
    var end = prompt('Digite o endereço:');
    var troc = prompt('Precisa de troco/cartao');
    alert('Quantidade = '+qua+' pizza(s)'+'  |  '+'Total = '+qua*60+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end);
    wppulr = 'https://wa.me//5512997641470?text='+qua+' pizza(s) de chocolate'+'  |  '+'Total = '+qua*60+' reais'+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end;
    window.open(wppulr);
}

function comprarsensacao(){
    var qua = prompt('Digite Quantas Pizza:');
    var end = prompt('Digite o endereço:');
    var troc = prompt('Precisa de troco/cartao');
    alert('Quantidade = '+qua+' pizza(s)'+'  |  '+'Total = '+qua*60+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end);
    wppulr = 'https://wa.me//5512997641470?text='+qua+' pizza(s) de sensação'+'  |  '+'Total = '+qua*60+' reais'+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end;
    window.open(wppulr);
}

function comprarconfete(){
    var qua = prompt('Digite Quantas Pizza:');
    var end = prompt('Digite o endereço:');
    var troc = prompt('Precisa de troco/cartao');
    alert('Quantidade = '+qua+' pizza(s)'+'  |  '+'Total = '+qua*60+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end);
    wppulr = 'https://wa.me//5512997641470?text='+qua+' pizza(s) de confete'+'  |  '+'Total = '+qua*60+' reais'+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end;
    window.open(wppulr);
}

function comprarprestigio(){
    var qua = prompt('Digite Quantas Pizza:');
    var end = prompt('Digite o endereço:');
    var troc = prompt('Precisa de troco/cartao');
    alert('Quantidade = '+qua+' pizza(s)'+'  |  '+'Total = '+qua*60+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end);
    wppulr = 'https://wa.me//5512997641470?text='+qua+' pizza(s) de prestigio'+'  |  '+'Total = '+qua*60+' reais'+'  |  '+
    'Troco/Cartão = '+troc+'  |  '+'Endereço = '+end;
    window.open(wppulr);
}