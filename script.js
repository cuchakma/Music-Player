class MusicPlayer{
    constructor() {
        this.initializeProperties();
        this.intializeSongs(this.songs[this.songIndex]);
        this.Actions();
    }

    initializeProperties() {
        this.songs             = ['summer', 'ukulele'];
        this.songIndex         = 0;
        this.musicConatiner    = document.querySelector('.music-container');
        this.playBtn           = document.querySelector('#play');
        this.prevBtn           = document.querySelector('#prev');
        this.nextBtn           = document.querySelector('#next');
        this.audio             = document.querySelector('#audio');
        this.progress          = document.querySelector('.progress');
        this.progressContainer = document.querySelector('.progress-container');
        this.songTitle         = document.querySelector('#title');
        this.songCover         = document.querySelector('#cover');
    }

    intializeSongs(song) {
        this.songTitle.innerText = song;
        this.audio.src           = `music/${song}.mp3`;
        this.songCover           = `images/song.jpeg`;
    }

    Actions() {
        this.playBtn.addEventListener('click', () => {
            this.isPlaying = this.musicConatiner.classList.contains('play');
            if(this.isPlaying) {
                this.pauseSong();
            } else {
                this.playSong();
            }
        });

        this.prevBtn.addEventListener('click', () => {
            this.songIndex--;
            if( this.songIndex != -1 && this.songs.includes(this.songs[this.songIndex])) {
                this.playPrevious(this.songs[this.songIndex]);
            } else {
                this.songIndex = 0;
                this.playPrevious(this.songs[this.songIndex]);
            }
        });

        this.nextBtn.addEventListener('click', () => {
            this.songIndex++;
            if(this.songIndex <= (this.songs.length -1) && this.songs.includes(this.songs[this.songIndex])) {
                this.playNext(this.songs[this.songIndex]);
            } else {
                this.songIndex = this.songs.length -1;
                this.playNext(this.songs[this.songIndex]);
            }
        });
    }

    pauseSong() {
        this.musicConatiner.classList.remove('play');
        this.playBtn.querySelector('i.fas').classList.remove('fa-pause');
        this.playBtn.querySelector('i.fas').classList.add('fa-play');
        this.audio.pause();
    }

    playSong() {
        this.musicConatiner.classList.add('play');
        this.playBtn.querySelector('i.fas').classList.remove('fa-play');
        this.playBtn.querySelector('i.fas').classList.add('fa-pause');
        this.audio.play();
    }

    playPrevious(songName) {
        this.intializeSongs(songName);
        this.musicConatiner.classList.add('play');
        this.playBtn.querySelector('i.fas').classList.remove('fa-play');
        this.playBtn.querySelector('i.fas').classList.add('fa-pause');
        this.audio.play();
    }

    playNext(songName) {
        this.intializeSongs(songName);
        this.musicConatiner.classList.add('play');
        this.playBtn.querySelector('i.fas').classList.remove('fa-play');
        this.playBtn.querySelector('i.fas').classList.add('fa-pause');
        this.audio.play();
    }
}

new MusicPlayer();