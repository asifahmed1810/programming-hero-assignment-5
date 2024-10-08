
function getInputbyid(id) {

    const showInput = document.getElementById(id).value;
    const showInputint = parseFloat(showInput);


    return showInputint;
}

// -----------------------------------------------------------------------------------------------------

function showBalancebyId(id) {

    const showBalance = document.getElementById(id).innerText;
    const showBalanceint = parseFloat(showBalance);

    return showBalanceint;
}

// ------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------

document.getElementById('add-btn-1').addEventListener('click', function (event) {

    event.preventDefault();

    const input1 = getInputbyid('add-input-1');
    const balance1 = showBalancebyId('show-balance-1');


    const newbalance1 = input1 + balance1;
    document.getElementById('add-input-1').value = '';

    const mainBalance = showBalancebyId('main-balance');
    const newMainbalance = mainBalance - input1;
 
    if (input1 <= 0 || isNaN(input1)  ){
        return alert('Invalid Donation Amount');
    } else if (newMainbalance < 0) {
        return alert('Insufficient Balance')
    } else {



        document.getElementById('show-balance-1').innerText = newbalance1;

        document.getElementById('main-balance').innerText = newMainbalance;

        const p = document.createElement('p');


        const dateTime = new Date();
        const currentDate = dateTime.toLocaleDateString();
        const currentTime = dateTime.toLocaleTimeString();


        p.innerHTML = `<p  class="text-xl my-5 p-5 border border-gray-200 rounded-xl">${input1} Taka is Donated for Flood relief in Noakhali,Bangladesh <br>
          Date: ${currentDate}  ${currentTime}  GMT +0600 (Bangladesh Standard Time)</p>`

        document.getElementById('history-text').innerText = '';

        document.getElementById('history-container').appendChild(p);
        document.getElementById('history-text').classList.add('hidden');



        if (input1 > 0 && input1 < newMainbalance) {

            return my_modal_1.showModal();

        }
    }

});

// ---------------------------------------------------------------------------------------------------

document.getElementById('add-btn-2').addEventListener('click', function (event) {
    event.preventDefault();

    const input2 = getInputbyid('add-input-2');
    const balance2 = showBalancebyId('show-balance-2');


    const newbalance2 = input2 + balance2;
    document.getElementById('add-input-2').value = '';

    const mainBalance = showBalancebyId('main-balance');
    const newMainbalance = mainBalance - input2;

    if (input2 <= 0 || isNaN(input2)) {
        return alert('Invalid Donation Amount');
    } else if (newMainbalance < 0) {
        return alert('Insufficient Balance')
    } else {
        document.getElementById('show-balance-2').innerText = newbalance2;

        document.getElementById('main-balance').innerText = newMainbalance;
        const p = document.createElement('p');


        const dateTime = new Date();
        const currentDate = dateTime.toLocaleDateString();
        const currentTime = dateTime.toLocaleTimeString();


        p.innerHTML = `<p  class="text-xl my-5 p-5 border border-gray-200 rounded-xl">${input2} Taka is Donated for Flood relief in Feni,Bangladesh <br>
          Date: ${currentDate}  ${currentTime}  GMT +0600 (Bangladesh Standard Time)</p>`

        document.getElementById('history-text').innerText = '';

        document.getElementById('history-container').appendChild(p);
        document.getElementById('history-text').classList.add('hidden');


        if (input2 > 0 && input2 < newMainbalance) {

            return my_modal_1.showModal();

        }
    }

});

// ------------------------------------------------------------------------------------------------------

document.getElementById('add-btn-3').addEventListener('click', function (event) {
    event.preventDefault();

    const input3 = getInputbyid('add-input-3');
    const balance3 = showBalancebyId('show-balance-3');


    const newbalance3 = input3 + balance3;
    document.getElementById('add-input-3').value = '';

    const mainBalance = showBalancebyId('main-balance');
    const newMainbalance = mainBalance - input3;

    if (input3 <= 0 || isNaN(input3)) {
        return alert('Invalid Donation Amount');
    } else if (newMainbalance < 0) {
        return alert('Insufficient Balance')
    } else {

        document.getElementById('show-balance-3').innerText = newbalance3;

        document.getElementById('main-balance').innerText = newMainbalance;

        const p = document.createElement('p');


        const dateTime = new Date();
        const currentDate = dateTime.toLocaleDateString();
        const currentTime = dateTime.toLocaleTimeString();


        p.innerHTML = `<p  class="text-xl my-5 p-5 border border-gray-200 rounded-xl">${input3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh<br>
          Date: ${currentDate}  ${currentTime}  GMT +0600 (Bangladesh Standard Time)</p>`

        document.getElementById('history-text').innerText = '';

        document.getElementById('history-container').appendChild(p);
        document.getElementById('history-text').classList.add('hidden');

        if (input3 > 0 && input3 < newMainbalance) {

            return my_modal_1.showModal();

        }
    }
});

// ------------------------------------------------------------------------------------------------------

// document.getElementById('blog-btn').addEventListener('click', function(){
//     window.location.href='/home.html';
// });
