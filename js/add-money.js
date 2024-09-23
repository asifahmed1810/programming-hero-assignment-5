

document.getElementById('add-btn-1').addEventListener('click',function(event){

    event.preventDefault();
    
    const input1=getInputbyid('add-input-1');
    const balance1=showBalancebyId('show-balance-1');

    if( input1<0 || isNaN(input1) ){
        return alert('Invalid Donation Amount');
    }

    

    const newbalance1=input1+balance1;

    document.getElementById('show-balance-1').innerText=newbalance1;
    document.getElementById('add-input-1').value='';

});

document.getElementById('add-btn-2').addEventListener('click',function(event){
    event.preventDefault();

    const input2=getInputbyid('add-input-2');
    const balance2=showBalancebyId('show-balance-2');

    if( input2<0 || isNaN(input2) ){
        return alert('Invalid Donation Amount');
    }

    const newbalance2=input2+balance2;

    document.getElementById('show-balance-2').innerText=newbalance2;
    document.getElementById('add-input-2').value='';
});


document.getElementById('add-btn-3').addEventListener('click',function(event){
    event.preventDefault();

    const input3=getInputbyid('add-input-3');
    const balance3=showBalancebyId('show-balance-3');

    if( input3<0 || isNaN(input3) ){
        return alert('Invalid Donation Amount');
    }

    const newbalance3=input3+balance3;

    document.getElementById('show-balance-3').innerText=newbalance3;
    document.getElementById('add-input-3').value='';
});



function getInputbyid(id){

    const showInput=document.getElementById(id).value;
    const showInputint=parseFloat(showInput);
    

    return showInputint ;
}

function showBalancebyId(id){

    const showBalance=document.getElementById(id).innerText;
    const showBalanceint=parseFloat(showBalance);

    return showBalanceint;
}