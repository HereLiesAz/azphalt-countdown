
export function register(runtime) {
    runtime.registerGenerator('countdown', (canvas, params) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'black'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.fillStyle = 'white'; ctx.font = '120px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(Math.ceil(5 - (params.time || 0)), canvas.width/2, canvas.height/2);
    });
}
