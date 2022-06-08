CREATE TABLE [Brands] (
          [Id] int NOT NULL IDENTITY,
          [Name] nvarchar(200) NOT NULL,
          [Timer] timestamp NULL,
          CONSTRAINT [PK_Brands] PRIMARY KEY ([Id])
      );

CREATE TABLE [Products] (
          [Id] nvarchar(450) NOT NULL,
          [BrandId] int NOT NULL,
          [Timer] varbinary(max) NOT NULL,
          [ProductName] nvarchar(max) NOT NULL,
          [GraphicName] nvarchar(max) NOT NULL,
          [CostPrice] money NOT NULL,
          [MSRP] money NOT NULL,
          [QtyOnHand] int NOT NULL,
          [QtyOnBackOrder] int NOT NULL,
          [Description] nvarchar(2000) NOT NULL,
          CONSTRAINT [PK_Products] PRIMARY KEY ([Id]),
          CONSTRAINT [FK_Products_Brands_BrandId] FOREIGN KEY ([BrandId]) REFERENCES [Brands] ([Id]) ON DELETE CASCADE
      );

CREATE INDEX [IX_Products_BrandId] ON [Products] ([BrandId]);

INSERT INTO Brands (Name)
VALUES ('Turtle Beach');

INSERT INTO Brands (Name)
VALUES ('Kraken');

INSERT INTO Brands (Name)
VALUES ('HyperX');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('1',  1, 0x31, 'Stealth 700 Gen 2', 'Stealth_700_Gen2.jpeg', 100.53, 199.99, 3, 10, 'Realistic audio with 50mm Nanoclear(tm) Drivers, Bluetooth Connectivity to Turtle Beach Audio Hub App, Aerofit(tm) cooling-gel infused ear cushions');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('2',  1, 0x31, 'Stealth 600 Gen 2', 'Stealth_600_Gen2.jpeg', 90.53, 139.99, 55, 102, 'Gen 2 flip-to-mute microphone, Long-lasting 15-hour battery life, Immersive audio with expertly-tuned 50mm drivers');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('3',  1, 0x31, 'Recon Air', 'Recon_Air.jpeg', 2.50, 49.99, 0, 101, 'Dual Wireless Connectivity, Bluetooth(R) 5.1 Wireless Technology, Noise-Cancelling, Gaming-Tuned Mic for Clear Chat, Reversible Ear Hook & Swappable EarTips, Dependable 10-Hour Battery, Convenient Controls on Headset & Wireless Transmitter, Turtle Beach Audio Hub App Compatible, Great for video conferences on PC or Mac');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('4',  1, 0x31, 'Recon Spark', 'Recon_Spark.jpeg', 3.45, 59.99, 3, 300, 'Durable, metal-reinforced headband, High-sensitivty flip-to-mute microphone, Comfortable, memory-foam ear cushions');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('5',  1, 0x31, 'Recon 500', 'Recon_500.jpeg', 22.45, 79.99, 0, 101, 'Durable, metal-reinforced headband, High-sensitivty flip-to-mute microphone, Comfortable, memory-foam ear cushions');


INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('6',  2, 0x31, 'Kraken V3', 'Kraken_V3.jpeg', 2.50, 49.99, 0, 100, 'A PC gaming headset powered by Razer Chroma(tm) RGB, armed with advanced 7.1 surround sound for realistic positional audio.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('7',  2, 0x31, 'BlackShark V2 X', 'BlkShk_V2_X.jpeg', 2.50, 82.99, 23, 10, 'The gaming headset thats approved by pro gamers featuring TriForce 50mm drivers, HyperClear Cardioid Mic, and advanced passive noise cancellation.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('8',  2, 0x31, 'Kraken Kitty', 'Kraken_Kitty.jpeg', 33.50, 139.99, 0, 100, 'Create the purrfect gaming look with your own killer kitty style. Express your own unique personality and passion in the most colorful way imaginable with the Razer Kraken Kitty Edition—a USB gaming headset with highly customizable lighting thats every shade of awesome.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('9',  2, 0x31, 'Kaira Pro', 'Kaira_Pro.jpeg', 22.50, 133.99, 0, 100, 'Enjoy cutting-edge audio performance that embraces the future of Xbox. Enter the Razer Kaira Pro—a wireless headset for Xbox Series X|S and mobile gaming.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('10', 2, 0x31, 'Kraken BT-Hello Kitty', 'Kraken_BTHello_Kitty.jpeg', 15.99, 151.99, 0, 100, 'Come along with Hello Kitty and Friends this holiday as they embark on an extraordinary journey to a place where limits are exceeded, epic plays are celebrated, and friendships are cherished above all else. Experience this adventure with exciting Razer gear as you share unforgettable moments and winning smiles with each other—because as Hello Kitty always says, “You can never have too many friends”, or wins.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('11', 3, 0x31, 'Cloud Stinger', 'Cloud_Stinger.jpeg', 6.50, 69.95, 4, 15, 'The HyperX Cloud Stinger family of headsets is known for featuring high-quality audio, lightweight design, and being durably built. Its a fantastic headset for the many players starting out on their adventures. Upgrade your sound with available 7.1 surround sound options via NGENUITY software to enjoy more immersive audio. Select from wired or wireless versions and most models feature a convenient swivel-to-mute noise cancellation microphone. Whether you play on PC, PlayStation, or Xbox, theres a headset in the Stinger family thats designed for you and optimized for the way you play.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('12', 3, 0x31, 'Cloud II', 'Cloud2.jpeg', 19.50, 139.95, 0, 100, 'The HyperX Cloud was built to be an ultra-comfortable gaming headset with amazing sound. We put a lot of thought into the details of our HyperX signature memory foam, the premium leatherette, clamping force, and weight distribution to create a headset thats comfortable through long gaming sessions. Its no wonder that its become the preferred gaming headset for millions of gamers. Whether you want to focus on the competition or relax with some of your favorite games, theres a Cloud thats perfect for you.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('13', 3, 0x31, 'Cloud Revolver', 'CloudRevolver.jpeg', 11.50, 209.32, 33, 300, 'If youre serious about gaming, you need a headset that will give you the maximum competitive advantage. The HyperX Cloud Revolver(tm) line is premium-grade gear, meticulously designed to meet the demands of the elite PC or console gamer. Next-gen drivers separate out the lows, mids and highs to crank out precisely positioned, high-quality sound. The Revolver family has stereo and Plug-N-Play Dolby(R) 7.1 Surround models, which both feature studio-grade sound stages and next-gen drivers that excel in FPS and open environment settings. Both headsets feature durable solid-steel frames, and signature HyperX memory foam for award-winning comfort. Cloud Revolver is the headset to choose if youre looking for top-tier comfort, audio quality and clear communication.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('14', 3, 0x31, 'Cloud Flight S', 'Cloud_FlightS.jpeg', 7.50, 139.95, 0, 100, 'The HyperX Cloud Flight S gives you an impressive 30 hours1 of long-lasting wireless gaming freedom. Its the first free-standing Qi-charging wireless gaming headset, giving you the convenience of both wireless charging and 2.4GHz wireless audio connectivity. Activate HyperX custom-tuned virtual 7.1 surround sound2 and unlock an extra level of immersion from your audio entertainment with a touch of your earcup. Adjust the balance of game and chat volume easily by pressing the onboard controls, bypassing all those system menus. If you want to further tune things to your wishes, you can customize the intuitive earcup controls with easy-to-use HyperX NGENUITY software.
Cloud Flight S features HyperXs signature comfort thanks to extra plush memory foam and breathable leatherette. Its built with durable steel sliders to help absorb some of the wear and tear of daily use. The flexible, detachable microphone is Discord and TeamSpeak certified and features an LED mic mute indicator and mic monitoring functionality. It also has 90 rotating earcups, so you can rest the headset comfortably around your neck, and their innovative locking design keeps the headset stable as it charges.');

INSERT INTO Products (Id, BrandId, Timer, ProductName, GraphicName, CostPrice, MSRP, QtyOnHand, QtyOnBackOrder, Description)
VALUES ('15', 3, 0x31, 'Cloud Orbit', 'Cloud_Orbit.jpeg', 22.56, 352.98, 2, 33, 'The HyperX Cloud Orbit launches you into another dimension of high-quality audio immersion with Audeze(tm) planar magnetic drivers and Waves Nx(R) 3D audio technology. Hear sounds with breathtaking clarity and incredible precision thanks to the super-fast frequency response and distortion resistance of the 100mm planar magnetic drivers. 3D audio technology creates a three-dimensional sound space, allowing the Cloud Orbit to deliver a more realistic audio experience with ultra-accurate sound localization and positioning. The headset includes three detachable cable options so you can complete your dream setup with immersive 3D audio, whether gaming on PC, Xbox One1, PS4, or Mobile. Head tracking technology, only available on the Cloud Orbit S, tracks the tiniest head movements nearly 1000 times a second to provide total immersion as it stabilizes in-game audio environments to deliver pinpoint sound localization.');

