const SopBmm01 = document.querySelector(".IKI-SOP-BMM-01")
SopBmm01.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-01`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) {
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm02 = document.querySelector(".IKI-SOP-BMM-02")
SopBmm02.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-02`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) {
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm03 = document.querySelector(".IKI-SOP-BMM-03")
SopBmm03.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-03`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) {
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm04 = document.querySelector(".IKI-SOP-BMM-04")
SopBmm04.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-04`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) {
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm05 = document.querySelector(".IKI-SOP-BMM-05")
SopBmm05.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-05`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm06 = document.querySelector(".IKI-SOP-BMM-06")
SopBmm06.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-06`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm07 = document.querySelector(".IKI-SOP-BMM-07")
SopBmm07.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-07`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm08 = document.querySelector(".IKI-SOP-BMM-08")
SopBmm08.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-08`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm09 = document.querySelector(".IKI-SOP-BMM-09")
SopBmm09.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-09`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm10 = document.querySelector(".IKI-SOP-BMM-10")
SopBmm10.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-10`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm11 = document.querySelector(".IKI-SOP-BMM-11")
SopBmm11.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-11`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm12 = document.querySelector(".IKI-SOP-BMM-12")
SopBmm12.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-12`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})

const SopBmm13 = document.querySelector(".IKI-SOP-BMM-13")
SopBmm13.addEventListener("click", () => {
  fetch(`http://localhost:8000/download-IKI-SOP-BMM-13`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  }).then(async res => {
    if (res.status === 200) { 
      console.log(res)
      const blob = await res.blob();
      const file = new Blob(
        [blob], 
        {type: 'application/pdf'}
      );
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);  
    }
  })
})
