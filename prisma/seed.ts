import { PrismaClient } from '../app/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const defaultPassword = await bcrypt.hash('password123', 10);
    const users = [
        {
        name: 'Admin User',
        email: 'admin@user.com',
        password: defaultPassword,
        role: 'Admin',
        designation: 'Admin',
        contact: ''
        },
        {
        name: 'Saddam Hussein Memon',
        email: 'saddam.dd@user.com',
        password: defaultPassword,
        role: 'DD',
        designation: 'Deputy Director',
        contact: ''
        },
        {
        name: 'Assistant Commissioner Naushahro Feroze',
        email: 'ac.naushahroferoze@user.com',
        password: defaultPassword,
        role: 'AC',
        designation: 'Assistant Commissioner',
        contact: ''
        },
        {
        name: 'Assistant Commissioner Mehrabpur',
        email: 'ac.mehrabpur@user.com',
        password: defaultPassword,
        role: 'AC',
        designation: 'Assistant Commissioner',
        contact: ''
        },
        {
        name: 'Assistant Commissioner Bhiria',
        email: 'ac.bhiria@user.com',
        password: defaultPassword,
        role: 'AC',
        designation: 'Assistant Commissioner',
        contact: ''
        },
        {
        name: 'Assistant Commissioner Moro',
        email: 'ac.moro@user.com',
        password: defaultPassword,
        role: 'AC',
        designation: 'Assistant Commissioner',
        contact: ''
        },
        {
        name: 'Assistant Commissioner Kandiaro',
        email: 'ac.kandiaro@user.com',
        password: defaultPassword,
        role: 'AC',
        designation: 'Assistant Commissioner',
        contact: ''
        },
        {
        name: 'Mukhtiarkar Naushahro Feroze',
        email: 'mukhtiarkar.naushahroferoze@user.com',
        password: defaultPassword,
        role: 'Mukhtiarkar',
        designation: 'Mukhtiarkar',
        contact: ''
        },
        {
        name: 'Mukhtiarkar Mehrabpur',
        email: 'mukhtiarkar.mehrabpur@user.com',
        password: defaultPassword,
        role: 'Mukhtiarkar',
        designation: 'Mukhtiarkar',
        contact: ''
        },
        {
        name: 'Mukhtiarkar Bhiria',
        email: 'mukhtiarkar.bhiria@user.com',
        password: defaultPassword,
        role: 'Mukhtiarkar',
        designation: 'Mukhtiarkar',
        contact: ''
        },
        {
        name: 'Mukhtiarkar Moro',
        email: 'mukhtiarkar.moro@user.com',
        password: defaultPassword,
        role: 'Mukhtiarkar',
        designation: 'Mukhtiarkar',
        contact: ''
        },
        {
        name: 'Mukhtiarkar Kandiaro',
        email: 'mukhtiarkar.kandiaro@user.com',
        password: defaultPassword,
        role: 'Mukhtiarkar',
        designation: 'Mukhtiarkar',
        contact: ''
        },
        {
        name: 'Mukhtiarkar/Incharge Evacuee Property',
        email: 'mukhtiarkar.evacuee@user.com',
        password: defaultPassword,
        role: 'Mukhtiarkar',
        designation: 'Mukhtiarkar/Incharge Evacuee Property',
        contact: ''
        },
        {
        name: 'Mukhtiarkar barrage',
        email: 'mukhtiarkar.barrage@user.com',
        password: defaultPassword,
        role: 'Mukhtiarkar',
        designation: 'Mukhtiarkar barrage',
        contact: ''
        }
    ];

    // Create Talukas and their Dehs
    const talukas = [
    {
      name: 'KANDIARO',
      dehs: [
        'Kandiaro', 'Lakha', 'Sethar', 'Pirmard', 'Ghanghra', 'Bazidpur', 
        'Ghulam Shah', 'Kandhar', 'Budak', 'Shamirdero', 'Mahessar', 
        'Saleh Pur', 'Moria', 'Mirzapur', 'Jea Pota', 'Chachak', 'Gul Shah',
        'Kouro Khushik', 'Mosodero', 'Machi', 'Shekhiani', 'Mohbat Dero Jagir',
        'Bello Mohbat Dero', 'Khanwahan', 'Mohbat Dero Siyal', 'Lundi',
        'Kamaldero-I', 'Kamaldero-II', 'Bakhri-I', 'Bakhri-II', 'Bello Bhounar',
        'Bello Samtia', 'Bello Kamal Dero', 'Dabhro', 'Darbello New', 'Larik',
        'Bhagodero-I', 'Bhagodero-II', 'Haji Shah', 'Darbello Old', 'Sona Bindi',
        'Abad-III', 'Khairodero', 'Ladho Bisharat', 'Thatt Moosa', 'Samtia',
        'Manjuth', 'Kalatagar-I', 'Kalatagar-II', 'Sahita', 'Bhority', 'Detha'
      ]
    },
    {
      name: 'BHIRIA',
      dehs: [
        'Bhiria', 'Kot Bahadur', 'Jalbani', 'Dingro', 'Dali', 'Kajar',
        'Khahi Qasim', 'Soondhan', 'Machur', 'Khahi Mamon', 'Khahi Rahu',
        'Molhan Rayati', 'Molhan Jagir', 'Ladho Rano', 'Dalipota', 'Tharushah',
        'Pano Usman', 'Madd Aleem', 'Bhiro', 'Palano', 'Khah Jagir', 'Dheengo',
        'Panhwari', 'Baran', 'Chaheen Manomal', 'Bella Wah', 'Chakar Wah',
        'Gher Gaju', 'Kandir', 'Rajo Keerio', 'Mango', 'Burira'
      ]
    },
    {
      name: 'N.FEROZE',
      dehs: [
        'Naushahro', 'Serhal', 'Wassayo', 'Dhori Bachal', 'Koor Hassan',
        'Nathar Detha', 'Jiskani', 'Izzat Wagan', 'Noor Pur', 'Kalooro',
        'Batil', 'Wassan', 'Wagan', 'Pir Parto', 'Koor Gahno', 'Kajhar',
        'Bhurnd', 'Panjo', 'Seengarchi', 'Abji', 'Abran', 'Gejh No.1',
        'Gejh No.2', 'Thatt No.1', 'Thatt No.2', 'Keti Abu Bakar No.1',
        'Keti Abu Bakar No.2', 'Khuhawar No.1', 'Khuhawar No.2', 'Mithiani No.1',
        'Mithiani No.II', 'Belo Mithiani', 'Reo Katcho', 'Padidan', 'Khuhi Jalal',
        'Khariro', 'Bhanbhri', 'Kalro', 'Agham', 'Dangeja', 'Ghanghno',
        'Shuja Mohammad', 'Cheeho', 'Miranpur', 'Tetri', 'Phull', 'Parya',
        'Menghlo', 'Mubejani', 'Chanari', 'Kanghal', 'Jarri', 'Bookar',
        'Sahib Khan', 'Dall', 'Loothi', 'Veesar', 'Changal', 'Masur Ji Wai',
        'Sher Khan'
      ]
    },
    {
      name: 'MORO',
      dehs: [
        'Moro', 'Daras', 'Mari', 'Dalchand', 'Old Gachero', 'New Gachero',
        'Khero Dero', 'Belo Khero Dero', 'Misri', 'Miran Jatoi', 'Bet Budho',
        'Khokhar', 'Kalhora', 'Korai', 'Fazil Jageer', 'Fato Balal',
        'Waryaso Rayati', 'Waryaso Jageer', 'Abad Kahkat', 'Qaim Koor',
        'Ghair Abad Kahkat', 'Dumber Ji Wai', 'Khaliso', 'Khair Wah', 'Karap',
        'Karocho', 'Doro Behan', 'Kenchi Jageer', 'Wad Pagia', 'Dheeran Jageer',
        'Lundki', 'Sultan Behan', 'Sadhuja', 'Chando', 'Sehra', 'Lett', 'Borari',
        'Dilo Shah', 'Gharho', 'Manaheen', 'Kareja', 'Kacho Koheri', 'Malkani',
        'Ganghan Jageer', 'Deparja', 'Fareed Dero', 'Bhambo Dero', 'Saleh Pur',
        'Kot Satabo', 'Lalia', 'Belo Lalia', 'Junalo', 'Chaneja'
      ]
    },
    {
      name: 'MEHRABPUR',
      dehs: [
        'Mehrabpur', 'Langarji', 'Bhogri', 'Halani', 'Peer Watio', 'Behlani',
        'Godho Hindu', 'Saleh Sahito', 'Kotri Kabir', 'Devan', 'Nao Abad',
        'Dodha', 'Dehat', 'Mad Ibyani', 'Natho Rajper', 'Jiando Rajper',
        'Moule Dino Haji', 'Mehar Haji', 'Tuttah', 'Chibhar Banbhan',
        'Khuda Bux Jalbani', 'Kharik', 'Saeed Pur', 'Deengaro', 'Qaisar Mari',
        'Syed Shuja', 'Hote Khan Jalbani', 'Vighia Mal', 'Rajo Dahiri',
        'Panjaban', 'Deh Sattar Mangrio', 'Saangi', 'Bago Daro', 'Khakhri'
      ]
    }
    ];
    
    await prisma.user.deleteMany({});
    await prisma.taluka.deleteMany({});
    await prisma.deh.deleteMany({});

    for (const user of users) {
      await prisma.user.create({
        data: user
      });
    }

    for (const taluka of talukas) {
      // Create Taluka
      const createdTaluka = await prisma.taluka.create({
        data: {
          name: taluka.name,
        },
      });
  
      // Create Dehs for this Taluka
      for (const dehName of taluka.dehs) {
        await prisma.deh.create({
          data: {
            name: dehName,
            talukaId: createdTaluka.id,
          },
        });
      }
    } 

  console.log('Users/Taluka/Deh seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });