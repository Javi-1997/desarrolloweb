const btn = document.querySelector('#ofertas')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'Mira estas ofertas por $299999',
        icon: 'success',
        confirmButtonText: 'buenisimo'
})
})


const btn2 = document.querySelector('#r')
btn2.addEventListener('click', () => {

    swal.fire({
        title: "¡Estas seguro?",
        text: "¡se borrara el mensaje!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal.fire("Mensaje eliminado", {
            icon: "success",
          });
        } else {
          swal.fire("cancelado!");
        }
      });
})


const send = document.querySelector('#enviar')
send.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'Mensaje enviado',
        icon: 'success',
        confirmButtonText: 'buenisimo'
})
})
