


function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

};



document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-section');  
    
});


document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-section');
 
});



const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');


function btnbg(activeButton, inactiveButton) {
    
    activeButton.classList.remove('bg-white', 'hover:bg-gray-200');
    activeButton.classList.add('bg-lime-400', 'hover:bg-lime-400');

    
    inactiveButton.classList.remove('bg-lime-400', 'hover:bg-lime-400');
    inactiveButton.classList.add('bg-white', 'hover:bg-gray-200');
}


donationBtn.addEventListener('click', function() {
    btnbg(donationBtn, historyBtn); 
});

historyBtn.addEventListener('click', function() {
    btnbg(historyBtn, donationBtn); 
});