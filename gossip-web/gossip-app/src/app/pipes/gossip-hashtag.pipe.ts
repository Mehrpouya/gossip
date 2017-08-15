import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gossipHashtag'
})
export class GossipHashtagPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    return this.urlifyHashtags(value);
  }

  urlifyHashtags(_text) : String {
    let hashtagRegex = /^#([a-zA-Z0-9]+)/g;
    let tempText = _text.replace(hashtagRegex, ' <a href="index.php?keywords=$1">#$1</a> ');

    var hashtagRegex2 = /([^&])#([a-zA-Z0-9]+)/g;
    tempText = tempText.replace(hashtagRegex2, '$1<a href="index.php?keywords=$2">#$2</a>');

    return tempText;
  }


}
