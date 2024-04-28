class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;

    for (let l of word) {
      if (!curr.children[l]) curr.children[l] = new TrieNode();
      curr = curr.children[l];
    }

    curr.endOfWord = true;
  }

  printAllWords(curr = this.root, word = "", result = []) {
    if (curr.endOfWord && Object.entries(curr.children).length === 0) {
      return result.push(word);
    } else if (curr.endOfWord) {
      result.push(word);
    }

    for (let c in curr.children) {
      this.printAllWords(curr.children[c], word + c, result);
    }

    return result;
  }

  suggestion(word){
    let keyword='', curr= this.root
    for( let c of word){
        if(curr.children[c]){
            keyword+=c
            curr=curr.children[c]
        }
    }
    return this.printAllWords(curr, keyword)
  }
}

const trie = new Trie();
trie.insert("Liston");
trie.insert("Fermi");
trie.insert("Lis");
trie.insert("Akil");
trie.insert("Akash");
trie.insert("Aravind");
console.log(trie);
console.log(trie.printAllWords());
console.log(trie.suggestion('Ak'))
