//Sort songs based on songID from two albums using Merge Sort- divide,conquer and combine 


function mergeSort(leftAlbum,rightAlbum){
    let i=0;
    let j=0;
    let songAlbums = [];
    while(i<leftAlbum.length || j<rightAlbum.length){
        if(i===leftAlbum.length){
            songAlbums.push(rightAlbum[j]);
            j++;
        }else if(j===rightAlbum.length || leftAlbum[i]<=rightAlbum[j]){
            songAlbums.push(leftAlbum[i]);
            i++;
        }else{
            songAlbums.push(rightAlbum[j]);
            j++;
        }
    }
    return songAlbums;

}

console.log(mergeSort([259, 260, 264, 265, 273, 276, 279, 300],[214, 262, 266, 275, 290, 306]));