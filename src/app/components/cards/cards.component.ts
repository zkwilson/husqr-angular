import { Component, OnInit } from '@angular/core';
import {CardsService} from "../../services/cards.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardsRemaining: number | undefined
  deckObject: any | undefined
  cardObject: any | undefined
  deckId: string | undefined
  cards: string[] | undefined


  constructor(private cardsService: CardsService) {
    this.cardsService.getOneDeck().subscribe((deck) => {
      this.deckObject = deck
      this.cardsRemaining = this.deckObject.remaining
      this.deckId = this.deckObject.deck_id;})
  }

  ngOnInit(): void {
  }

  createDeck() {
    this.cardsService.getOneDeck().subscribe((deck) => {
      this.deckObject = deck
      this.deckId = this.deckObject.deck_id;
      this.cardsRemaining = this.deckObject.remaining
      console.log(this.deckId)

    })
  }

  drawCard() {
    if (this.deckId) {
      this.cardsService.drawOne(this.deckId).subscribe((card) => {
         this.deckObject = card
        this.cardObject = this.deckObject.cards
        console.log(this.cardObject)
        this.cardObject = this.cardObject
        // this.cardObject = this.deckObject.cards
        // console.log(this.cardObject)
        // const image = this.cardObject.image
        // this.cards = image
        // this.cardsRemaining = this.cardObject.remaining
        // console.log(this.cards)
        // this.deckObject = card
        // console.log(this.deckObject.cards)
      })

    }



  }
}
