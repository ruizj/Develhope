function calculateSalary(role) {
    let salary;
  
    switch (role) {
      case 'director general':
        salary = 2200;
        break;
      case 'gerente':
      case 'cto':
        salary = 1800;
        break;
      case 'promotor':
        salary = 1500;
        break;
      default:
        salary = 1000;
    }
  
    return salary + '€';
  }
  
  const ceoSalary = calculateSalary('director general');
  const managerSalary = calculateSalary('gerente');
  const ctoSalary = calculateSalary('cto');
  const developerSalary = calculateSalary('developer');
  const otherSalary = calculateSalary('other');
  
  console.log(ceoSalary);      // 2200€
  console.log(managerSalary);  // 1800€
  console.log(ctoSalary);      // 1800€
  console.log(developerSalary);// 1000€ (puesto predeterminado)
  console.log(otherSalary);    // 1000€ (puesto predeterminado)
  