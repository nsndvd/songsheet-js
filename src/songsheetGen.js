
/**
 * class SongsheetGen has multiple songs and save them on gen() under /path/md5(content+timestamp).pdf
 */
'use strict';

class SongsheetGen{
    constructor(){
        this.songs = {};
    }

    gen(download){
        if(typeof download === 'undefined')
            download = true;
        download = download && true;
        let res = [];
        for(let song in this.songs){
            if(this.songs.hasOwnProperty(song)) {
              res[res.length] = this.songs[song].gen();
              if (download) pdfMake.createPdf(res[res.length - 1]).download(song + '.pdf');
            }
        }
        return res;
    }

    add_song(string, settings){
        //TODO for multiple layouts change null
        let song = new Song(string, null, settings);
        this.songs[song.title] = song;
    };

    get_song(song_name){
        return this.songs[song_name]
    };
}

