import Swal from 'sweetalert2';

const CustomSwal = Swal.mixin({
    // toast: true,
    position: 'center',
    // showConfirmButton: false,
    confirmButtonColor: '#727271',
    showCloseButton: true,
    timer: 3000,
    width: '350px',
    imageUrl: 'gbenga.jpg' // Has to be web url
})
export default CustomSwal;