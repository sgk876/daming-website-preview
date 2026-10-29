/**
 * DaMing reference catalog.
 *
 * Add a product by appending one object to DAMING_CATALOG.products.
 * Required: id, category, title, summary, metrics (up to 3), specs, status.
 * Then open products/catalog.html and products/detail.html?id=YOUR-ID.
 * Use status "reference" only when a drawing or measured sample is in hand.
 * Use status "pending" when a figure comes from the previous website and is not a released drawing.
 * Do not add prices, testimonials, or certification marks here.
 *
 * Asset files belong in /assets/catalog/ and should be real photographs, not stock.
 */
(function (global) {
  const R = '/daming-website-preview';
  const glove = { href: R + '/resources/glove-wet-touch.html', label: 'Glove and wet-touch review' };
  const inputs = { href: R + '/resources/pcap-design-inputs.html', label: 'PCAP design inputs' };
  const support = { href: R + '/design-support.html', label: 'Start without a finished drawing' };
  const assembly = { href: R + '/products/assembly.html', label: 'Touch display assembly route' };

  function pcapResources() {
    return [inputs, glove, assembly, support];
  }

  global.DAMING_CATALOG = {
    version: 1,
    categories: [
      {
        id: 'pcap',
        label: 'PCAP reference panels',
        lede: 'Photographs and notes migrated from the previous touch-displays.com product pages. Only the 8.0-inch and 10.5-inch records carry a reference drawing. Other sizes keep the photograph and the page title, and leave unfinished dimensions unmarked rather than copied from the 15.6-inch sheet.'
      },
      {
        id: 'lcd',
        label: 'LCD module range',
        lede: 'The previous site described an LCD range. It did not publish separate module drawings, so this entry stays a range — not a list of orderable SKUs.'
      }
    ],
    products: [
      {
        id: 'pcap-80',
        category: 'pcap',
        featured: true,
        title: '8.0-inch PCAP reference panel',
        kicker: 'Reference drawing',
        sizeLabel: '8.0 inch',
        status: 'reference',
        statusLabel: 'Reference design',
        image: R + '/assets/catalog/pcap-80.jpg',
        imageAlt: 'Black 8.0-inch PCAP cover with three top openings and a short FPC tail ending in a controller',
        summary: 'A portrait G+G panel kept as a reference sample: USB interface and a CHSC5468 controller on the tail. Cover, sensor and acceptance limits still follow the project drawing.',
        paragraphs: [
          'Use this record when a portrait window, a short tail and a USB reference sample are a useful baseline. The previous product page was rewritten around measured cover, sensor and thickness figures instead of an empty template.',
          'Custom cover printing, holes and optical bonding are reviewed with the display, not assumed from this photograph. The controller shown is the reference sample, not a promise that every 8.0-inch build uses the same IC.'
        ],
        metrics: [
          { value: '8.0″', label: 'Reference diagonal' },
          { value: 'G+G', label: 'Structure' },
          { value: 'USB', label: 'Interface on the sample' }
        ],
        specs: [
          { name: 'Product category', value: 'Projected capacitive touch panel' },
          { name: 'Reference size', value: '8.0 inches' },
          { name: 'Structure', value: 'G+G' },
          { name: 'Touch points', value: 'Multi-touch configuration confirmed for each project' },
          { name: 'Cover viewing area', value: '108.24 × 172.80 mm (reference design)' },
          { name: 'Cover lens outline', value: '126.00 × 214.70 mm (reference design)' },
          { name: 'Sensor outline', value: '116.20 × 184.70 mm (reference design)' },
          { name: 'Touch-panel thickness', value: '1.85 ± 0.15 mm, touch panel only' },
          { name: 'Cover lens thickness', value: '1.10 mm (reference design)' },
          { name: 'Touch interface', value: 'USB on the reference sample' },
          { name: 'Touch controller', value: 'CHSC5468 on the reference sample' },
          { name: 'Sensor channels', value: 'TX32 × RX20 (reference design)' },
          { name: 'Operating temperature', value: '−20°C to +60°C on the reference touch panel; the assembly is confirmed per project' },
          { name: 'Storage temperature', value: '−30°C to +70°C on the reference touch panel; the assembly is confirmed per project' },
          { name: 'Source', value: 'touch-displays.com product id 1, reference-drawing revision' }
        ],
        resources: pcapResources(),
        related: ['pcap-105', 'pcap-134', 'lcd-range'],
        source: 'https://www.touch-displays.com/index.php?id=1'
      },
      {
        id: 'pcap-105',
        category: 'pcap',
        featured: true,
        title: '10.5-inch PCAP reference panel',
        kicker: 'Reference drawing',
        sizeLabel: '10.5 inch',
        status: 'reference',
        statusLabel: 'Reference design',
        image: R + '/assets/catalog/pcap-105.jpg',
        imageAlt: 'Landscape 10.5-inch PCAP panel with a long FPC tail and no controller on the glass',
        summary: 'A landscape G+G panel with an FPC tail for an external controller board. The reference engineering configuration uses USB; the board and host interface are confirmed with the stack.',
        paragraphs: [
          'This is the second record that carries a reference drawing rather than a pasted specification template. The photograph shows the sensor tail leaving the glass, which matches the external-controller description.',
          'Cover finish, touch tuning and bonding stay open until the display, bezel and controller board are named.'
        ],
        metrics: [
          { value: '10.5″', label: 'Reference diagonal' },
          { value: '1.30 mm', label: 'Touch-panel thickness' },
          { value: 'FPC', label: 'External controller tail' }
        ],
        specs: [
          { name: 'Product category', value: 'Projected capacitive touch panel' },
          { name: 'Reference size', value: '10.5 inches' },
          { name: 'Structure', value: 'G+G' },
          { name: 'Touch points', value: 'Multi-touch configuration confirmed for each project' },
          { name: 'Cover viewing area', value: '222.65 × 148.63 mm (reference design)' },
          { name: 'Cover lens outline', value: '230.71 × 164.21 mm (reference design)' },
          { name: 'Sensor outline', value: '230.31 × 159.07 mm (reference design)' },
          { name: 'Touch-panel thickness', value: '1.30 ± 0.10 mm, touch panel only' },
          { name: 'Cover lens thickness', value: '0.70 mm (reference design)' },
          { name: 'Sensor connection', value: 'FPC tail for an external touch-controller board' },
          { name: 'Reference controller board', value: 'TB62C; host interface confirmed for the selected configuration' },
          { name: 'Host interface', value: 'USB in the reference engineering configuration' },
          { name: 'Sensor channels', value: 'TX21 × RX36 (reference design)' },
          { name: 'Operating and storage', value: 'Confirmed for the selected cover, sensor, controller and assembly' },
          { name: 'Source', value: 'touch-displays.com product id 2, reference-drawing revision' }
        ],
        resources: pcapResources(),
        related: ['pcap-80', 'pcap-134', 'lcd-range'],
        source: 'https://www.touch-displays.com/index.php?id=2'
      },
      {
        id: 'pcap-134',
        category: 'pcap',
        title: '13.4-inch PCAP panel',
        kicker: 'Photograph on file',
        sizeLabel: '13.4 inch',
        status: 'pending',
        statusLabel: 'Pending confirmation',
        image: R + '/assets/catalog/pcap-134.jpg',
        imageAlt: 'Product photograph from the previous 13.4-inch PCAP page',
        summary: 'The previous site published this size with a product photograph. Its specification table repeated an unfinished 15.6-inch sheet, including placeholder outlines, so those figures are not shown as this panel’s drawing.',
        paragraphs: [
          'Treat the photograph as evidence that a 13.4-inch discussion existed, not as a released mechanical drawing. Outline, thickness, channels and controller are still open.',
          'The short industrial-control description said multi-touch, ten points. That statement is kept as a previous-page claim and has to be confirmed on the drawing before it is a requirement.'
        ],
        metrics: [
          { value: '13.4″', label: 'Size on the page title' },
          { value: 'Photo', label: 'Asset from the previous site' },
          { value: 'Open', label: 'Drawing not released' }
        ],
        specs: [
          { name: 'Catalog status', value: 'Pending confirmation', pending: true },
          { name: 'Size', value: '13.4 inches, taken from the page title', pending: true },
          { name: 'Touch points', value: 'Previous page said 10-point multi-touch for industrial control', pending: true },
          { name: 'Omitted on purpose', value: 'Lens outline, sensor outline, thickness and the 15.6-inch viewing area were placeholder or copied fields. They are not listed as this panel’s data.' },
          { name: 'Source', value: 'touch-displays.com product id 3' }
        ],
        resources: pcapResources(),
        related: ['pcap-105', 'pcap-156'],
        source: 'https://www.touch-displays.com/index.php?id=3'
      },
      {
        id: 'pcap-156',
        category: 'pcap',
        title: '15.6-inch PCAP panel',
        kicker: 'Photograph on file',
        sizeLabel: '15.6 inch',
        status: 'pending',
        statusLabel: 'Pending confirmation',
        image: R + '/assets/catalog/pcap-156.jpg',
        imageAlt: 'Landscape PCAP panel with a short bottom FPC, from the previous 15.6-inch page',
        summary: 'The 15.6-inch page is the source of a shared specification block that was pasted onto other sizes. Even here the lens and sensor outlines were still “XXX”, so the block is not treated as a finished drawing.',
        paragraphs: [
          'A viewing area of 344.76 × 194.19 mm was written on that sheet and is a plausible 16:9 active area for 15.6 inches. Because the same unfinished table was copied onto pages whose titles are different sizes, the number stays pending until a drawing confirms it.',
          'Interface families named on the sheet — COB or USB, with COF, I2C, UART or RS232 described as options — are discussion topics for the controller, not a configured part number. Compliance marks on that sheet are not republished as current certificates.'
        ],
        metrics: [
          { value: '15.6″', label: 'Size on the page title' },
          { value: '16:9', label: 'Ratio named on the sheet' },
          { value: 'Open', label: 'Outlines were placeholders' }
        ],
        specs: [
          { name: 'Catalog status', value: 'Pending confirmation', pending: true },
          { name: 'Size', value: '15.6 inches (appearance described as customizable)', pending: true },
          { name: 'Structure named on the sheet', value: 'G+G, with G+G or G+F+F described as customizable', pending: true },
          { name: 'Touch points', value: '10 points, as written on the unfinished sheet', pending: true },
          { name: 'Ratio', value: '16:9, with other ratios described as customizable', pending: true },
          { name: 'Viewing area as written', value: '344.76 × 194.19 mm — pending confirmation', pending: true },
          { name: 'Omitted on purpose', value: 'Lens outline, sensor outline and total thickness were placeholders (XXX / xx). Hardness, transmittance, temperature and certificate lines were a repeated block and are not listed as released limits.' },
          { name: 'Source', value: 'touch-displays.com product id 9' }
        ],
        resources: pcapResources(),
        related: ['pcap-134', 'pcap-160'],
        source: 'https://www.touch-displays.com/index.php?id=9'
      },
      {
        id: 'pcap-160',
        category: 'pcap',
        title: '16.0-inch PCAP panel',
        kicker: 'Photograph on file',
        sizeLabel: '16.0 inch',
        status: 'pending',
        statusLabel: 'Pending confirmation',
        image: R + '/assets/catalog/pcap-160.jpg',
        imageAlt: 'Product photograph from the previous 16.0-inch PCAP page',
        summary: 'A 16.0-inch title and photograph were published. The specification table on that page was the unfinished 15.6-inch block, so it is not repeated as this panel’s data.',
        paragraphs: [
          'The industrial-control blurb said ten-point multi-touch. Confirm the point count, structure and tail with the drawing before quoting a build.'
        ],
        metrics: [
          { value: '16.0″', label: 'Size on the page title' },
          { value: 'Photo', label: 'Asset from the previous site' },
          { value: 'Open', label: 'Drawing not released' }
        ],
        specs: [
          { name: 'Catalog status', value: 'Pending confirmation', pending: true },
          { name: 'Size', value: '16.0 inches, taken from the page title', pending: true },
          { name: 'Touch points', value: 'Previous page said 10-point multi-touch for industrial control', pending: true },
          { name: 'Omitted on purpose', value: 'The specification table matched the unfinished 15.6-inch sheet, including a 15.6-inch size line. Those rows are not attributed to this panel.' },
          { name: 'Source', value: 'touch-displays.com product id 5' }
        ],
        resources: pcapResources(),
        related: ['pcap-156', 'pcap-173'],
        source: 'https://www.touch-displays.com/index.php?id=5'
      },
      {
        id: 'pcap-173',
        category: 'pcap',
        title: '17.3-inch PCAP panel',
        kicker: 'Photograph on file',
        sizeLabel: '17.3 inch',
        status: 'pending',
        statusLabel: 'Pending confirmation',
        image: R + '/assets/catalog/pcap-173.jpg',
        imageAlt: 'Product photograph from the previous 17.3-inch PCAP page',
        summary: 'The 17.3-inch page carried its own photograph and the same unfinished 15.6-inch specification table. Only the title size is kept.',
        paragraphs: [
          'Do not use the 344.76 × 194.19 mm viewing area for this diagonal. That figure was copied with the template.'
        ],
        metrics: [
          { value: '17.3″', label: 'Size on the page title' },
          { value: 'Photo', label: 'Asset from the previous site' },
          { value: 'Open', label: 'Drawing not released' }
        ],
        specs: [
          { name: 'Catalog status', value: 'Pending confirmation', pending: true },
          { name: 'Size', value: '17.3 inches, taken from the page title', pending: true },
          { name: 'Touch points', value: 'Previous page said 10-point multi-touch for industrial control', pending: true },
          { name: 'Omitted on purpose', value: 'Copied 15.6-inch rows and placeholder outlines are not listed.' },
          { name: 'Source', value: 'touch-displays.com product id 4' }
        ],
        resources: pcapResources(),
        related: ['pcap-160', 'pcap-185'],
        source: 'https://www.touch-displays.com/index.php?id=4'
      },
      {
        id: 'pcap-185',
        category: 'pcap',
        title: '18.5-inch PCAP panel',
        kicker: 'Photograph on file',
        sizeLabel: '18.5 inch',
        status: 'pending',
        statusLabel: 'Pending confirmation',
        image: R + '/assets/catalog/pcap-185.jpg',
        imageAlt: 'Product photograph from the previous 18.5-inch PCAP page',
        summary: 'An 18.5-inch photograph and title were published. Mechanical data on that page was the shared unfinished sheet, so it is withheld.',
        paragraphs: [
          'Ask for the outline, viewing area and tail when this diagonal is a candidate. The catalog tile is here so the size is not lost when the old site is retired.'
        ],
        metrics: [
          { value: '18.5″', label: 'Size on the page title' },
          { value: 'Photo', label: 'Asset from the previous site' },
          { value: 'Open', label: 'Drawing not released' }
        ],
        specs: [
          { name: 'Catalog status', value: 'Pending confirmation', pending: true },
          { name: 'Size', value: '18.5 inches, taken from the page title', pending: true },
          { name: 'Touch points', value: 'Previous page said 10-point multi-touch for industrial control', pending: true },
          { name: 'Omitted on purpose', value: 'Copied 15.6-inch rows and placeholder outlines are not listed.' },
          { name: 'Source', value: 'touch-displays.com product id 7' }
        ],
        resources: pcapResources(),
        related: ['pcap-173', 'pcap-190'],
        source: 'https://www.touch-displays.com/index.php?id=7'
      },
      {
        id: 'pcap-190',
        category: 'pcap',
        title: '19.0-inch PCAP panel',
        kicker: 'Photograph on file',
        sizeLabel: '19.0 inch',
        status: 'pending',
        statusLabel: 'Pending confirmation',
        image: R + '/assets/catalog/pcap-190.jpg',
        imageAlt: 'Silver front cover with a rectangular window, two slots and a dark tail, from the previous 19.0-inch page',
        summary: 'The photograph shows a printed metal-looking front with a window and tail, published on the 19.0-inch page. It is not labeled here as a confirmed 19.0-inch glass drawing.',
        paragraphs: [
          'The specification table underneath the photograph was again the unfinished 15.6-inch block. Cover material, window size and whether this photograph is the touch sensor or a decorative bezel still need a drawing.'
        ],
        metrics: [
          { value: '19.0″', label: 'Size on the page title' },
          { value: 'Cover', label: 'Front photograph on file' },
          { value: 'Open', label: 'Drawing not released' }
        ],
        specs: [
          { name: 'Catalog status', value: 'Pending confirmation', pending: true },
          { name: 'Size', value: '19.0 inches, taken from the page title', pending: true },
          { name: 'Touch points', value: 'Previous page said 10-point multi-touch for industrial control', pending: true },
          { name: 'Photograph', value: 'Front cover with window, slots and tail. Construction is not identified on the image itself.', pending: true },
          { name: 'Omitted on purpose', value: 'Copied 15.6-inch rows and placeholder outlines are not listed.' },
          { name: 'Source', value: 'touch-displays.com product id 8' }
        ],
        resources: pcapResources(),
        related: ['pcap-185', 'pcap-156'],
        source: 'https://www.touch-displays.com/index.php?id=8'
      },
      {
        id: 'lcd-range',
        category: 'lcd',
        kind: 'family',
        title: 'LCD module range',
        kicker: 'Range, not a SKU',
        sizeLabel: '0.96–10.1 inch stated',
        status: 'pending',
        statusLabel: 'Pending confirmation',
        image: R + '/assets/materials/I043.png',
        imageAlt: 'Existing library photograph of a touch display assembly, not a specific LCD module',
        summary: 'The previous LCD page named a size span, bonding methods and display modes. It did not publish individual module drawings, resolutions or interfaces tied to a part number. This entry records the range so it can be replaced by real modules later.',
        paragraphs: [
          'Company pages also mentioned sizes up to 55 inches and a separate PCAP span of 0.96 to 32 inches. Those ranges do not agree with each other. None of them is a stock list.',
          'When a real LCD module is ready for the library, add it as its own product with a photograph, outline and interface. Do not invent a driver IC or a brightness figure to fill the table.',
          'The photograph is an existing touch-display assembly from this site’s library. It illustrates the integration discussion. It is not the picture of a named LCD SKU.'
        ],
        metrics: [
          { value: '0.96–10.1″', label: 'LCD span as stated' },
          { value: 'Frame / full', label: 'Bonding methods named' },
          { value: 'No SKU', label: 'Individual modules unpublished' }
        ],
        specs: [
          { name: 'Catalog status', value: 'Range only — pending confirmation of any single module', pending: true },
          { name: 'Size span on the LCD page', value: '0.96 inch to 10.1 inch', pending: true },
          { name: 'Other size claims', value: 'A factory paragraph said 0.96 to 55 inches. A PCAP paragraph said 0.96 to 32 inches. Confirm which span applies.', pending: true },
          { name: 'COG bonding', value: 'Single or multiple ICs, as named', pending: true },
          { name: 'CTP + LCM assembly', value: 'Frame bonding or full bonding, as named', pending: true },
          { name: 'Modes named', value: 'TN, IPS, a-Si, LTPS, IGZO, OLED; monochrome TFT and custom TFT', pending: true },
          { name: 'Resolutions named as a family', value: 'QCIF, QQVGA, QVGA, HVGA, VGA, WVGA, FWVGA, QHD, HD, FHD — not tied to a module', pending: true },
          { name: 'Photograph', value: 'Library image I043. Not a datasheet photo for a specific LCD.' }
        ],
        resources: [
          { href: R + '/products/assembly.html', label: 'Touch display assemblies' },
          { href: R + '/resources/display-driver-cables.html', label: 'Driver board and cable review' },
          support
        ],
        related: ['pcap-80', 'pcap-105', 'pcap-156'],
        source: 'https://www.touch-displays.com/index.php?catid=9'
      }
    ]
  };
})(window);
