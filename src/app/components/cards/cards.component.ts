import {Component, OnInit} from '@angular/core';
import {CardsService} from "../../services/cards.service";
import {Deck} from "../../interfaces/deck";
import {Card} from "../../interfaces/card";
import {Images} from "../../interfaces/image";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  deck: Deck | undefined

  // cards: Card[] | undefined

  constructor(private cardsService: CardsService) {
  }

  ngOnInit(): void {
  }

  createDeck() {
    this.cardsService.getOneDeck().subscribe((deck) => {
      this.deck = deck;
      console.log(this.deck);
    })
  }

  drawCard() {
    if (this.deck)
      this.cardsService.drawOne(this.deck?.deck_id).subscribe((deck) => {
        if (this.deck?.cards) {
          this.deck.cards.push(deck.cards)
          this.deck.remaining = deck.remaining
        } else if (deck.cards) {
          this.deck = deck;
        }
      })
    console.log(this.deck?.cards)
  }
}
