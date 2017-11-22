
/**
 * class SongsheetGen manages all songs and generates them on demand
 * @property {Song[]} songs - songs added to this generator
 */
'use strict';

class SongsheetGen{
    /**
     * @constructor
     * */
    constructor(){
        this.songs = {};
    }

    /**
     * generates pdfMake objects for all Songs
     * @param {boolean} download - whether to offer this pdf as download or not. if download is set to false, the pdfMake object can be used to parse it for a preview
     * @returns {pdfMake} pdfmake object
     * */
    gen(download=true){
        let res = [];
        for(let song in this.songs){
            if(this.songs.hasOwnProperty(song)) {
              res[res.length] = this.songs[song].gen();
              if (download) pdfMake.createPdf(res[res.length - 1]).download(song + '.pdf');
            }
        }
        return res;
    }

    /**
     * add a song to the generation queue. can also be used to update a song if the title wasnt changed.
     * @param {string} string - .st file as string
     * @param {Object} settings - layout settings (see Layout)
     * */
    add_song(string, settings){
        //TODO for multiple layouts change null
        let song = new Song(string, null, settings);
        this.songs[song.title] = song;
    };

    /**
     * remove a song from the queue
     * @param {string} song_title - song title which identifies the song
     * */
    remove_song(song_title){
        delete this.songs[song_title];
    }

    /**
     * get a Song object for song title
     * @param {string} song_title - song title which identifies the song
     * @returns {Song} song object
     * */
    get_song(song_title){
        return this.songs[song_title]
    };

    /**
     * get all available fonts
     * @returns {Object} all fonts as a dictionary with { font_id: { bold: ".tff", ... } }
     * */
    get_available_fonts(){
        return FONTS;
    }

    /**
     * get current font for a song by song title
     * @param {string} song_title - song title which identifies the song
     * @returns {string} font id
     * */
    get_font_for_song(song_title){
        return this.songs[song_title].layout.font;
    }

    /**
     * get all loaded songs
     * @returns {Song[]} get all songs in the queue
     * */
    get_songs(){
        return this.songs;
    }
}

