import { Component, OnInit } from '@angular/core';
import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
   ViewRef
} from "@angular/core";
import {PaneladdComponent} from '../paneladd/paneladd.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR!: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<PaneladdComponent>>()

  constructor(private CFR: ComponentFactoryResolver) { }


  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(PaneladdComponent);

    let panelComponentRef = this.VCR.createComponent(componentFactory);

    let panelComponent = panelComponentRef.instance;
    panelComponent.panel_unique_key = ++this.child_unique_key;
    panelComponent.homeRef = this;

    // add reference for newly created component
    this.componentsReferences.push(panelComponentRef);
  }

}
