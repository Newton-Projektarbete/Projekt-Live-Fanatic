function AudioTest(){

    return <>
  <section>
  <h2>audio example</h2>
    <p>This HTML Audio example is for proof that the backend streaming works, for production The JavaScript Audio object should be used.</p>

    <audio id="audioPlayer" width="50%" controls muted="muted" autoplay>
        <source src="/data/audio" type="audio/" />
    </audio>
  </section>
</>
}

export default AudioTest