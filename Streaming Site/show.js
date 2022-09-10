import { Show } from './JavaScript.js';
// Yates algo
Array.prototype.shuffle = function () {
    let i = this.length, j, stored;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        stored = this[j];
        this[j] = this[i];
        this[i] = stored;
    }
    return this;
}
const strings = ["a", "sus", "accusation", "sus", "sus", "ability", "able", "about", "above", "accept", "according", "account", "across", "act", "action", "activity", "actually", "add", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "age", "agency", "agent", "ago", "agree", "agreement", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "any", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "arm", "around", "arrive", "art", "article", "artist", "as", "ask", "assume", "at", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat", "beautiful", "because", "become", "bed", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood", "blue", "board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother", "budget", "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign", "can", "cancer", "candidate", "capital", "car", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "hacker", "community", "company", "compare", "computer", "concern", "condition", "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do", "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give", "glass", "go", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "gun", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "he", "head", "health", "hear", "heart", "heat", "heavy", "help", "her", "here", "herself", "high", "him", "himself", "his", "history", "hit", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "in", "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "it", "item", "its", "itself", "job", "join", "just", "keep", "key", "kid", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead", "leader", "learn", "least", "leave", "left", "leg", "legal", "less", "let", "letter", "level", "lie", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "lot", "love", "low", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "may", "maybe", "me", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "new", "news", "newspaper", "next", "nice", "night", "no", "none", "nor", "north", "not", "note", "nothing", "notice", "now", "n't", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "old", "on", "once", "one", "only", "onto", "open", "operation", "opportunity", "option", "or", "order", "organization", "other", "others", "our", "out", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "pay", "peace", "people", "per", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small", "smile", "so", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "poop", "imposter", "sussy", "augmented", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "to", "today", "together", "tonight", "too", "top", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV", "two", "type", "under", "understand", "unit", "until", "up", "upon", "us", "use", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "war", "watch", "water", "way", "we", "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white", "who", "whole", "whom", "whose", "why", "wide", "wife", "will", "win", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "yes", "yet", "you", "young", "your", "yourself", "sus", "among", "us"];
const genres = ['Adventure', 'Scientific', 'Fantasy', 'Educational', "Science", 'Comedy', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Drama', 'Thriller', 'Horror', 'Action', 'Documentary']; // 211 possibilities
const images = [
    "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/The_backrooms_recreation_digital.png",
    "https://i.ytimg.com/vi/ukVc3k5onv0/maxresdefault.jpg",
    "https://i.ytimg.com/vi/bo2vjQzNK8s/maxresdefault.jpg",
    "https://data.whicdn.com/images/344210342/original.jpg",
    "https://i.ytimg.com/vi/nB1dZcUqzDo/maxresdefault.jpg",
    "https://static.wikia.nocookie.net/3266e7f0-cdac-4260-adea-1bab9a0eea0d/scale-to-width/755",
    "https://static.boredpanda.com/blog/wp-content/uploads/2021/06/60d480711769b_aejovsru6td51__700.jpg",
    "https://i.pinimg.com/236x/f7/c3/a4/f7c3a424da92ce505d45467c68e3cdf8.jpg",
    "https://i.ytimg.com/vi/DHIvPX2Gqq0/hqdefault.jpg",
    "https://pm1.narvii.com/7674/e437dc3b04a76780c21e08702c11a601f64385e9r1-348-348v2_hq.jpg",
    "https://64.media.tumblr.com/24faec16f27dcce46907a1815d16dcad/291b30bc4b229c3f-55/s1280x1920/6eeda0958f6187e55a235301e2700d271c24e804.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/962f1aa6-b8d1-4fb0-a37e-e1c6f0d2d996/de0n0mx-406bd536-9102-48e9-91e2-cf487f16639a.png/v1/fill/w_1024,h_542,q_80,strp/familiar_places____by_shockwavetoaster_de0n0mx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQyIiwicGF0aCI6IlwvZlwvOTYyZjFhYTYtYjhkMS00ZmIwLWEzN2UtZTFjNmYwZDJkOTk2XC9kZTBuMG14LTQwNmJkNTM2LTkxMDItNDhlOS05MWUyLWNmNDg3ZjE2NjM5YS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.SNXRED83RUKZgJGodYXFPmiNMTjHUz6mRnjEFhNBRKg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/435fe3aa-5c64-41fd-a320-97791193c83e/ddo546s-ce51aace-e0f9-47b0-93f8-3543e42e0309.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzNWZlM2FhLTVjNjQtNDFmZC1hMzIwLTk3NzkxMTkzYzgzZVwvZGRvNTQ2cy1jZTUxYWFjZS1lMGY5LTQ3YjAtOTNmOC0zNTQzZTQyZTAzMDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IACU7bJJpBolH0rh82ZLX6zWqhpL9zXtvASrZJidP6E",

]
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function CreateWord(amount, array) {
    var words = [];
    for (let i = 0; i < amount; i++) {
        words.push(array[randomRange(0, array.length)]);
        // remove the current[i] word if the current word is the same as the previous word in the array || the first word
        if (amount > 0 && words[i] == words[i - 1] && array === genres) { //both conditions must be true to run
            words.pop();
        }
    }
    return words.join(" ");
}

let library = []
// create as many movies 
for (let i = 0; i < 50; i++) {
    library.push(
        new Show(
            CreateWord(randomRange(2, 6), strings), //title
            randomRange(1950, 2023), //date
            CreateWord(randomRange(1, 3), genres), //genre
            CreateWord(randomRange(3, 50), strings),
            CreateWord(1, images.shuffle()),
    ))
}
 
library.forEach(function (show) {
    show.addToPage();
    strings.shuffle();
    genres.shuffle();
    console.log(strings);
});

let genre = document.querySelectorAll(".genre");
document.addEventListener('scroll', animationLoad);
document.addEventListener('DOMContentLoaded', animationLoad)
function animationLoad() {
    genre.forEach(function (genre) {
        if (window.scrollY + window.innerHeight > genre.offsetTop) {
            genre.classList.add("slide");
        } else {
            genre.classList.remove('slide');
        }
    })
}

export { genres };
    