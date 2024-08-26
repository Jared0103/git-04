const cards = document.querySelector('#card-poke');
const templateCard = document.querySelector('#template-card').content;

let prev, next;

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    
    // Asignar eventos a los botones
    document.querySelector('#btn-next').addEventListener('click', () => {
        if (next) fetchData(next);
    });

    document.querySelector('#btn-prev').addEventListener('click', () => {
        if (prev) fetchData(prev);
    });
});

const fetchData = async (link) => {
    try {
        loadingData(true);
        const url = link ? link : 'https://rickandmortyapi.com/api/character';
        const res = await fetch(url);
        const personajes = await res.json();
        next = personajes.info.next;
        prev = personajes.info.prev;
        pintarCards(personajes.results);
        console.log("🚀 ~ fetchData ~ next:", next);
        console.log("🚀 ~ fetchData ~ prev:", prev);
    } catch (error) {
        console.log("🚀 ~ error ~ : ", error);
    } finally {
        loadingData(false);
    }
}

const pintarCards = (Characters) => {
    const fragment = document.createDocumentFragment();
    cards.textContent = '';
    Characters.forEach((item) => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('img').setAttribute('src', item.image);
        
        fragment.appendChild(clone);
    });
    setTimeout(() => {
        cards.appendChild(fragment);
    }, 2000);
}

const loadingData = (estado) => {
    const loading = document.querySelector('#loading');
    if (loading) {
        if (estado) {
            loading.classList.remove('d-none');
        } else {
            loading.classList.add('d-none');
        }
    }
}
