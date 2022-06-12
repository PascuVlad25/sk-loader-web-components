import { Component, Host, h, Prop } from '@stencil/core';

enum AlignmentType {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}

@Component({
  tag: 'sk-loader-paragraph',
  styleUrl: 'sk-loader-paragraph.css',
  shadow: true,
})
export class SkLoaderParagraph {
  @Prop() rows: number = 1;
  @Prop() align: 'left' | 'center' | 'right' = 'left';
  @Prop() indent: boolean = false;
  @Prop() animated: boolean = true;

  private rowsStyles: any[] = [];

  connectedCallback(): void {
    this.rowsStyles = this.generateRows(this.rows);
  }

  render() {
    return (
      <Host>
        {this.rowsStyles.map((rowStyle) => 
          <div class='sk-container' style={rowStyle.parent}>
            <div class={`sk-paragraph-row sk-loader ${this.animated ? 'animated' : ''}`} style={rowStyle.child}></div>
          </div>
        )}
      </Host>
    );
  }

  private isLastRow(index: number): boolean {
    return this.rows != 1 && index === this.rows-1;
  }

  private getWidth(index: number): number {
    if (this.isLastRow(index)) {
      return 30 + Math.floor(Math.random() * 20);
    }
    else if (this.indent && index === 0) {
      return 70 + Math.floor(Math.random() * 20);
    }
    return 80 + Math.floor(Math.random() * 20);
  }

  private getALignmentStyle(): string {
    switch (this.align) {
      case AlignmentType.Left:
        return 'flex-start';
      case AlignmentType.Center:
        return 'center';
      case AlignmentType.Right:
        return 'flex-end';
      default: 
        return 'flex-start';
    }
  }

  private generateRows(rowsNumber: number): any[] {
    return [...Array(rowsNumber)].map((_, index) => {
      const style: any = {
        child: {
          width: `${this.getWidth(index)}%`,
        },
        parent: {
          'justify-content': this.getALignmentStyle()
        }
      };

      if (this.indent && index === 0) {
        style.parent['margin-left'] = '10%';
      }

      return style;
    });
  }
}
