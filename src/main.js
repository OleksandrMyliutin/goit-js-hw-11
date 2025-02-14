import { createRequest } from './js/pixabay-api.js';
import { requestsMarkups } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    cardList: document.querySelector('.card-list'),
    form: document.querySelector('.form-style'),
    loader: document.querySelector('.loader')
};

refs.form.addEventListener("submit", handleSubmit);

let lightbox = new SimpleLightbox('.card-list a', {
    captionsData: "alt",
    captionDelay: 250,
});

let intervalId; 

function handleSubmit(e) {
    e.preventDefault();
    const search = e.currentTarget.elements.query.value.trim();

    if (!search) {
        iziToast.warning({
            title: "Warning",
            message: "⚠️ Please enter a search query!",
            position: "topRight",
        });
        return;
    }

    refs.loader.style.display = "block";

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        createRequest(search)
            .then(data => {
                if (!data.length) {
                    iziToast.info({
                        title: "Not found",
                        message: "😢 Sorry, there are no images matching your search query. Please try again!",
                        position: "topRight",
                    });
                    return;
                }
                refs.cardList.innerHTML = requestsMarkups(data);
                lightbox.refresh();
            })
            .catch(error => {
                iziToast.error({
                    title: "Error",
                    message: "🚨 Sorry, something went wrong. Please try again!",
                    position: "topRight",
                });
            })
            .finally(() => {
                refs.loader.style.display = "none";
            });
    }, 3000);

    e.currentTarget.reset();
}
