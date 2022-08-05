const complimentBtn = document.getElementById("complimentButton")
const fortunebtn = document.getElementById("Fortune")
let form = document.querySelector('#contact');
// const handleSubmit = document.getElementById("contact")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const cookie = res.data;
            alert(cookie);
    });
};
function handleSubmit(evt) {
	evt.preventDefault();
	alert('form submit')
}
form.addEventListener('submit', handleSubmit);
fortunebtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
