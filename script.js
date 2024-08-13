document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('root');

    const formwrap = document.querySelector('.form-wrapper');
    const movecounter = document.querySelector('.movecounter');
    const movecountdown = document.getElementById('movecount');
    let size;
    const fchild = root.children[0];
    document.getElementById('sizeForm').addEventListener('submit', (e)=>{
        e.preventDefault();
        formwrap.style.display = 'none';
        root.style.display = 'block';
        movecounter.style.display = 'block';
        size = document.querySelector('input[name="diskcount"]').value;

        let movetheshold = (2**size) -1;
        movecountdown.innerHTML = movetheshold;

        for(let j = 0; j<size;j++){
            let p = document.createElement('p');
            p.setAttribute('data-value', j);
            p.style.background = 'red';
            p.style.width = (j*10+20)+'px';
            p.style.minHeight = '15px';
            fchild.appendChild(p);
        }

        let diskval;
        const disks = document.querySelectorAll('.tower p');
        for(let i = 0; i<disks.length; i++){
            disks[i].addEventListener('click', (event)=>{
                //prevent parent click trigger on child click trigger
                event.stopPropagation();

                // remove all the data-state attribute on click
                disks.forEach((disk) => {
                    disk.removeAttribute('data-state');
                });

                diskval = disks[i].getAttribute('data-value');

                //check if current item is at the top
                if(disks[i].parentNode.children[0] === disks[i]){
                    disks[i].setAttribute('data-state', 'clicked');
                }
            });
        }

        const firsttower = root.children[0].innerHTML;
        const lchild = root.children[2];
        const tower = document.querySelectorAll('#root .tower');

        for(let i = 0; i<tower.length; i++){
            tower[i].addEventListener('click', () => {
                let p = document.querySelector('[data-state="clicked"]');
                let firstchild = tower[i].querySelector('p');
                if(p){
                    if(firstchild == null || p.getAttribute('data-value') < firstchild.getAttribute('data-value')){
                        tower[i].prepend(p);
                        p.removeAttribute('data-state');
                        movetheshold--;
                        movecountdown.innerHTML = movetheshold;
                        if(movetheshold < 0){
                            document.getElementById('status-message').innerHTML = 'You Loose';
                        }
                    }
                }
                
                if(firsttower ==  lchild.innerHTML){
                    document.getElementById('status-message').innerHTML = 'You Win';
                    root.style.display = 'none';
                    movecounter.style.display = 'none';
                    document.getElementById('result').style.display = 'block';
                }

            });
        }
    })

    document.querySelector('.cross').addEventListener('click', () => {
        window.location.reload();
    })
});