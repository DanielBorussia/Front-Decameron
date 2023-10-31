import Swal from "sweetalert2";

export const sweet = (icon, title, text = '') => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'Listo',
        customClass: {
            container: 'my-swal'
        }
      })

}

export const sweetConfirmation = (title, text, callback) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Confirmado",
        cancelButtonText: "Cancelar",
        customClass: {
            container: 'my-swal'
        }
    })
    .then(resultado => {
        callback(resultado) 
    });
}