function add() {
    const inp1 = document.getElementById('inp1').value;     //getting value
    const inp2 = parseFloat(document.getElementById('inp2').value);   
    const inp3 = parseFloat(document.getElementById('inp3').value);   

    if (inp1 === '' || isNaN(inp2) || isNaN(inp3)) {     //showing alert
        alert('Please fill out all the fields with valid numbers');
        return;
    }

    const iname = document.getElementById('iname');     //select tag by id
    const ino = document.getElementById('ino');
    const icost = document.getElementById('icost');

    const p1 = document.createElement('p');     //create p tage
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.innerHTML = inp1;      //put value
    p2.innerHTML = inp2;
    p3.innerHTML = inp3;

    iname.appendChild(p1);     //append tag
    ino.appendChild(p2);
    icost.appendChild(p3);

    document.getElementById('inp1').value = '';     //clear input value
    document.getElementById('inp2').value = '';
    document.getElementById('inp3').value = '';

    if (inp2 > 0 && inp3 > 0) {                              //if statement
        const total = document.getElementById('total');
        const t1 = document.createElement('p');
        total.appendChild(t1);

        const v1 = inp2 * inp3;

        t1.innerHTML = v1;
        
        const allTotal = total.querySelectorAll('p');
        let sum = 0;

        allTotal.forEach(p => {
           let num = parseFloat(p.textContent);
           if (!isNaN(num)) {
            sum += num;
           }
        });

        document.getElementById('calculate').addEventListener('click' , function() {         // run calculate button
           document.getElementById('tamount').innerHTML = sum;

           let gst = (sum / 100) * 2.5;

           document.getElementById('cgst').innerHTML = gst;
           document.getElementById('sgst').innerHTML = gst;

           let gtotal = ( 2* gst) + sum ; 

           document.getElementById('gtotal').innerHTML = gtotal;

        } );

        document.getElementById('back').addEventListener('click' , function(){
            iname.removeChild(p1);
            ino.removeChild(p2);
            icost.removeChild(p3);
            total.removeChild(t1);
            document.getElementById('tamount').innerHTML = '';
            document.getElementById('cgst').innerHTML = '';
            document.getElementById('sgst').innerHTML = '';
            document.getElementById('gtotal').innerHTML = '';
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
        })

    }
}

document.getElementById('all_clear').addEventListener('click' , function() {
      
    document.getElementById('report1').style.display = 'none';
    document.getElementById('bill').style.display = 'block';

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const iname = document.getElementById('iname').innerHTML;    
    const ino = document.getElementById('ino').innerHTML;
    const icost = document.getElementById('icost').innerHTML;
    const itotal = document.getElementById('total').innerHTML;

    const tamount = document.getElementById('tamount').innerHTML;
    const cgst = document.getElementById('tamount').innerHTML;
    const sgst = document.getElementById('tamount').innerHTML;
    const gtotal = document.getElementById('tamount').innerHTML;

    document.getElementById('bnp2').innerHTML = name;
    document.getElementById('bnp4').innerHTML = phone;

    document.getElementById('item_name').innerHTML = iname;
    document.getElementById('item_no').innerHTML = ino;
    document.getElementById('item_cost').innerHTML = icost;
    document.getElementById('itotal').innerHTML = itotal;

    document.getElementById('tta').innerHTML = tamount;
    document.getElementById('ttcgst').innerHTML = (tamount / 100) * 2.5;
    document.getElementById('ttsgst').innerHTML = (tamount / 100) * 2.5;

    let a = document.getElementById('ttcgst').innerHTML;
    let b = document.getElementById('ttsgst').innerHTML;
    let c = Number(a) + Number(b);
    let d = Number(tamount);
    let e = Number(c) + Number(d);

    document.getElementById('ttgt').innerHTML = e;                        


    document.getElementById('back').addEventListener('click' , function(){
        document.getElementById('report1').style.display = 'block';
        document.getElementById('bill').style.display = 'none';

        document.getElementById('bnp2').innerHTML = '';
        document.getElementById('bnp4').innerHTML = '';

        document.getElementById('item_name').innerHTML = '';
        document.getElementById('item_no').innerHTML = '';
        document.getElementById('item_cost').innerHTML = '';
        document.getElementById('itotal').innerHTML = '';

        document.getElementById('tta').innerHTML = '';
        document.getElementById('ttcgst').innerHTML = '';
        document.getElementById('ttsgst').innerHTML = '';
        document.getElementById('ttgt').innerHTML = '';
    })
    
});


