
function CheckPetNumbers(){
    const numOfpet = document.getElementById("pet-numbers");
    const num = parseInt(numOfpet.value); 
    const petError = document.getElementById("pet-error");
   if (isNaN(num) || num <= 0 || num >= 100) { 
        petError.innerHTML = "กรุณาใส่ค่าระหว่าง 0 ถึง 100";
        return false;
    } else {
        petError.innerHTML = "";
        return true;
    }
}

function CheckName(){
    const fullname = document.getElementById("fullname").value.trim();
    const nameErr = document.getElementById("fullname-error");
    if (fullname === "" ) {
        nameErr.innerHTML = "กรุณากรอกชื่อ-นามสกุล";
        return false;
    } else{
        nameErr.innerHTML = "";
    }
}

function CheckPhone(){
    const phone = document.getElementById("phone-number").value.trim();
    const phoneErr = document.getElementById("phone-error");
    if (phone === "") {
        phoneErr.innerHTML = "กรุณากรอกเบอร์ติดต่อ";
        return false;
    } else{
        phoneErr.innerHTML = "";
    }
}

function CheckConfirm(){
    const InputConfirm = document.getElementById("disclaimer");
    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone-number").value.trim();
    const petNum = document.getElementById("pet-numbers").value;
    const InputCheck = InputConfirm.checked;

    const nameErr = document.getElementById("fullname-error");
    if (fullname === "" ) {
        nameErr.innerHTML = "กรุณากรอกชื่อ-นามสกุล";
        alert("กรุณากรอกชื่อ-นามสกุล");
        return false;
    } else{
        nameErr.innerHTML = "";
    }
    
    const phoneErr = document.getElementById("phone-error");
    if (phone === "") {
        phoneErr.innerHTML = "กรุณากรอกเบอร์ติดต่อ";
        alert("กรุณากรอกเบอร์ติดต่อ");
        return false;
    } else{
        phoneErr.innerHTML = "";
    }

    const petError = document.getElementById("pet-error");
    if (petNum === "" || petNum <= 0 || petNum >= 100) {
        /*alert("กรุณาใส่จำนวนสัตว์เลี้ยงเป็นตัวเลข ระหว่าง 0 ถึง 100 เท่านั้น");*/
        petError.innerHTML = "กรุณาใส่ค่าระหว่าง 0 ถึง 100";
        alert("กรุณาใส่ค่าระหว่าง 0 ถึง 100");
        return false;
    } else{
        petError.innerHTML="";
    }

    if(!InputCheck){
        alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข");
        return false;
    } else{
        alert("Successfully Submitted!!");
        return true;
    }
}
