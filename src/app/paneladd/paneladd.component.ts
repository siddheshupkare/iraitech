import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
   ViewRef
} from "@angular/core";
import {HomeComponent} from "../home/home.component";
@Component({
  selector: 'app-paneladd',
  templateUrl: './paneladd.component.html',
  styleUrls: ['./paneladd.component.css']
})
export class PaneladdComponent {

  public panel_unique_key: number | undefined;
  public homeRef: HomeComponent | undefined;


  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR!: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<ChildComponent>>()

  constructor(private CFR: ComponentFactoryResolver) { }

  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(ChildComponent);

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }
}
