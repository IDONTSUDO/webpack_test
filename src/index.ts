// import './styles.css';

// const greeting = document.createElement('h1');
// greeting.textContent = 'Hello, Webpack with TypeScript and CSS!';
// document.body.appendChild(greeting);

const p = document.getElementById('123')
const p1 = document.createElement('div');

// if(p != null) p.innerHTML = `<div>5</div>`


document.getElementById('input')?.addEventListener('input', (event) => {
    const ggggg = event as InputEvent;
    // console.log(p.data)
    // console.log(event);
    p!.innerText = ggggg.data ?? '';
})