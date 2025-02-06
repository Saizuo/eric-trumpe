document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('distributionChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Liquidity', 'Public Distribution', 'Team Vesting', 'Treasury', 'Community'],
                datasets: [{
                    data: [10, 15, 35, 20, 20],
                    backgroundColor: [
                        '#A27B5C',
                        '#DCD7C9',
                        '#3F4E4F',
                        '#2C3639',
                        '#8B7355'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.1,
                layout: {
                    padding: {
                        top: 50,
                        right: 120,
                        bottom: 120,
                        left: 50
                    }
                },
                plugins: {
                    legend: {
                        position: {
                            y: 50  // Moves legend 150px from top
                        },
                        align: 'center',
                        labels: {
                            boxWidth: 25,
                            font: {
                                family: 'Cormorant Garamond',
                                size: 14
                            },
                            padding: 0
                        }
                    },
                    datalabels: {
                        color: '#2C3639',
                        font: {
                            family: 'Cinzel',
                            size: 14
                        },
                        formatter: (value, ctx) => {
                            return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                        },
                        anchor: 'end',
                        align: 'end',

                        offset: 8
                    }

                },                cutout: '60%'
            },
            plugins: [ChartDataLabels]
        });
    }
});

// Add this to your existing script.js
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

function copyContract() {
    const contractAddress = 'AC2VaE5EfmWV5Gp8TXDmR42Xt7m2aHCRyMNmg64ppump';
    navigator.clipboard.writeText(contractAddress).then(() => {
        const copyButton = document.querySelector('.copy-button');
        copyButton.textContent = 'Copied!';
        showNotification('Contract address copied to clipboard!');
        
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
